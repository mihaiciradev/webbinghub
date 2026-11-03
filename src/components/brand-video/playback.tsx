"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import { DURATION, DURATION_MS, nextSceneStart, prevSceneStart } from "@/lib/brand-video/timeline";

type Listener = (time: number, playing: boolean) => void;

type PlaybackApi = {
  register: (anim: Animation) => () => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  restart: () => void;
  seek: (time: number) => void;
  next: () => void;
  prev: () => void;
  enter: () => void;
  getTime: () => number;
  subscribe: (listener: Listener) => () => void;
};

const PlaybackContext = createContext<PlaybackApi | null>(null);

export function usePlayback() {
  const api = useContext(PlaybackContext);
  if (!api) throw new Error("usePlayback must be used inside PlaybackProvider");
  return api;
}

export function useTrack(
  ref: { current: Element | null },
  keyframes: Keyframe[],
) {
  const api = usePlayback();
  useEffect(() => {
    const el = ref.current;
    if (!el || keyframes.length < 2) return;
    const anim = el.animate(keyframes, {
      duration: DURATION_MS,
      fill: "both",
      easing: "linear",
    });
    anim.pause();
    return api.register(anim);
  }, [api, keyframes]);
}

export function PlaybackProvider({
  children,
  autoplay,
  startAt,
}: {
  children: ReactNode;
  autoplay: boolean;
  startAt: number;
}) {
  const timeRef = useRef(Math.min(DURATION, Math.max(0, startAt)));
  const playingRef = useRef(false);
  const anims = useRef<Animation[]>([]);
  const listeners = useRef(new Set<Listener>());
  const rafRef = useRef(0);
  const lastRef = useRef(0);

  const notify = useCallback(() => {
    const time = timeRef.current;
    const playing = playingRef.current;
    listeners.current.forEach((listener) => listener(time, playing));
  }, []);

  const apply = useCallback(() => {
    const ms = timeRef.current * 1000;
    anims.current = anims.current.filter((anim) => anim.playState !== "idle");
    for (const anim of anims.current) {
      try {
        anim.currentTime = ms;
      } catch {
        /* Animation may have been cancelled between frames. */
      }
    }
  }, []);

  const stopLoop = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
  }, []);

  const loop = useCallback(
    (now: number) => {
      if (!playingRef.current) return;
      if (!lastRef.current) lastRef.current = now;
      const dt = Math.min(0.05, (now - lastRef.current) / 1000);
      lastRef.current = now;
      timeRef.current = Math.min(DURATION, timeRef.current + dt);
      apply();
      if (timeRef.current >= DURATION) {
        timeRef.current = DURATION;
        playingRef.current = false;
        apply();
        notify();
        return;
      }
      notify();
      rafRef.current = requestAnimationFrame(loop);
    },
    [apply, notify],
  );

  const play = useCallback(() => {
    if (timeRef.current >= DURATION - 0.001) return;
    playingRef.current = true;
    lastRef.current = 0;
    stopLoop();
    rafRef.current = requestAnimationFrame(loop);
    notify();
  }, [loop, notify, stopLoop]);

  const pause = useCallback(() => {
    playingRef.current = false;
    stopLoop();
    notify();
  }, [notify, stopLoop]);

  const seek = useCallback(
    (time: number) => {
      timeRef.current = Math.min(DURATION, Math.max(0, time));
      if (timeRef.current >= DURATION) {
        playingRef.current = false;
        stopLoop();
      }
      lastRef.current = 0;
      apply();
      notify();
    },
    [apply, notify, stopLoop],
  );

  const restart = useCallback(() => {
    timeRef.current = 0;
    apply();
    playingRef.current = true;
    lastRef.current = 0;
    stopLoop();
    rafRef.current = requestAnimationFrame(loop);
    notify();
  }, [apply, loop, notify, stopLoop]);

  const toggle = useCallback(() => {
    if (playingRef.current) pause();
    else if (timeRef.current >= DURATION - 0.001) restart();
    else play();
  }, [pause, play, restart]);

  const enter = useCallback(() => {
    if (timeRef.current >= DURATION - 0.001) restart();
    else play();
  }, [play, restart]);

  const api = useMemo<PlaybackApi>(
    () => ({
      register: (anim: Animation) => {
        anim.pause();
        try {
          anim.currentTime = timeRef.current * 1000;
        } catch {
          /* Not ready yet. The next apply() catches up. */
        }
        anims.current.push(anim);
        return () => {
          anims.current = anims.current.filter((item) => item !== anim);
          anim.cancel();
        };
      },
      play,
      pause,
      toggle,
      restart,
      seek,
      next: () => seek(nextSceneStart(timeRef.current)),
      prev: () => seek(prevSceneStart(timeRef.current)),
      enter,
      getTime: () => timeRef.current,
      subscribe: (listener: Listener) => {
        listeners.current.add(listener);
        listener(timeRef.current, playingRef.current);
        return () => listeners.current.delete(listener);
      },
    }),
    [enter, pause, play, restart, seek, toggle],
  );

  useEffect(() => {
    apply();
    if (!autoplay) return;
    const id = window.setTimeout(play, 1200);
    return () => window.clearTimeout(id);
  }, [apply, autoplay, play]);

  useEffect(() => () => stopLoop(), [stopLoop]);

  return <PlaybackContext.Provider value={api}>{children}</PlaybackContext.Provider>;
}
