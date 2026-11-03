"use client";

import { useEffect, useRef, useState } from "react";
import { DURATION } from "@/lib/brand-video/timeline";
import { usePlayback } from "@/components/brand-video/playback";
import HookScene from "@/components/brand-video/scenes/HookScene";
import ConnectionScene from "@/components/brand-video/scenes/ConnectionScene";
import CapabilitiesScene from "@/components/brand-video/scenes/CapabilitiesScene";
import EngineeringScene from "@/components/brand-video/scenes/EngineeringScene";
import ValueScene from "@/components/brand-video/scenes/ValueScene";
import OutroScene from "@/components/brand-video/scenes/OutroScene";
import SubtitleTrack from "@/components/brand-video/SubtitleTrack";
import TimelineControls from "@/components/brand-video/TimelineControls";

function DebugReadout() {
  const api = usePlayback();
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "h" || event.metaKey || event.ctrlKey || event.altKey) return;
      event.preventDefault();
      setOn((value) => !value);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return api.subscribe((time) => {
      if (ref.current) ref.current.textContent = time.toFixed(2);
    });
  }, [api]);

  if (!on) return null;
  return (
    <div className="bv-debug">
      <span ref={ref}>0.00</span>
      <span> / {DURATION.toFixed(2)}</span>
    </div>
  );
}

export default function VideoStage() {
  const boxRef = useRef<HTMLDivElement>(null);
  const scalerRef = useRef<HTMLDivElement>(null);
  const api = usePlayback();

  useEffect(() => {
    const box = boxRef.current;
    const scaler = scalerRef.current;
    if (!box || !scaler) return;
    const fit = () => {
      const rect = box.getBoundingClientRect();
      const scale = Math.min(rect.width / 1920, rect.height / 1080);
      scaler.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const previousBody = document.body.style.overflow;
    const previousHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.background = "#050505";
    return () => {
      document.body.style.overflow = previousBody;
      document.documentElement.style.overflow = previousHtml;
      document.body.style.background = "";
    };
  }, []);

  useEffect(() => {
    return api.subscribe((_, playing) => {
      boxRef.current?.classList.toggle("is-playing", playing);
    });
  }, [api]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const key = event.key;
      if (key === " " || key === "Enter" || key === "ArrowRight" || key === "ArrowLeft") {
        event.preventDefault();
      }
      if (key === " ") api.toggle();
      else if (key === "Enter") api.enter();
      else if (key === "r" || key === "R") api.restart();
      else if (key === "p" || key === "P") api.toggle();
      else if (key === "ArrowRight") api.next();
      else if (key === "ArrowLeft") api.prev();
      else if (key === "f" || key === "F") {
        const box = boxRef.current;
        if (!box) return;
        if (document.fullscreenElement) document.exitFullscreen();
        else box.requestFullscreen();
      } else if (key === "Escape" && !document.fullscreenElement) {
        api.pause();
        api.seek(0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [api]);

  const fullscreen = () => {
    const box = boxRef.current;
    if (!box) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else box.requestFullscreen();
  };

  return (
    <div className="bv-app">
      <div className="bv-letterbox" ref={boxRef}>
        <div className="bv-scaler" ref={scalerRef}>
          <div className="bv-stage">
            <div className="bv-glow" />
            <div className="bv-grid" />
            <HookScene />
            <ConnectionScene />
            <CapabilitiesScene />
            <EngineeringScene />
            <ValueScene />
            <OutroScene />
            <SubtitleTrack />
            <DebugReadout />
          </div>
        </div>
      </div>
      <TimelineControls onFullscreen={fullscreen} />
    </div>
  );
}
