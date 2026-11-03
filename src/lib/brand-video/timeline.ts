/** Single cue sheet for the 30-second brand film. Edit timing here. */

export const DURATION = 30;
export const DURATION_MS = DURATION * 1000;

export const EASE_IN = "cubic-bezier(.2,.8,.2,1)";
export const EASE_MOVE = "cubic-bezier(.65,0,.25,1)";
export const EASE_WIPE = "cubic-bezier(.7,0,.2,1)";

export const SCENES = [
  { id: "hook", name: "Disconnected systems", start: 0, end: 4 },
  { id: "connect", name: "We connect the pieces", start: 4, end: 9 },
  { id: "build", name: "What we build", start: 9, end: 16 },
  { id: "engineering", name: "Engineering", start: 16, end: 22 },
  { id: "value", name: "Why WebbingHUB", start: 22, end: 26 },
  { id: "outro", name: "Brand", start: 26, end: 30 },
] as const;

export type SceneId = (typeof SCENES)[number]["id"];

export const SUBTITLES = [
  { start: 0.35, end: 3.75, text: "Your business shouldn't depend on disconnected systems." },
  { start: 4.25, end: 8.7, text: "We build software that brings everything together." },
  { start: 9.3, end: 15.65, text: "Internal platforms, customer portals, booking systems, and integrations." },
  { start: 16.3, end: 21.7, text: "Built for real workflows, not just polished screens." },
  { start: 22.3, end: 25.7, text: "Practical engineering, built around your business." },
  { start: 26.4, end: 29.3, text: "WebbingHUB. Custom software that connects your business." },
] as const;

export function sceneAt(time: number) {
  let current: (typeof SCENES)[number] = SCENES[0];
  for (const scene of SCENES) {
    if (time >= scene.start) current = scene;
  }
  return current;
}

export function nextSceneStart(time: number) {
  return SCENES.find((scene) => scene.start > time + 0.04)?.start ?? SCENES[SCENES.length - 1].start;
}

export function prevSceneStart(time: number) {
  const prior = [...SCENES].reverse().find((scene) => scene.start < time - 0.04);
  return prior?.start ?? 0;
}

type FrameProps = Record<string, string | number>;

/** Build a 0–30s keyframe list. `t` is seconds. `ease` eases into the next keyframe. */
export function kf(points: Array<FrameProps & { t: number; ease?: string }>): Keyframe[] {
  const sorted = [...points].sort((a, b) => a.t - b.t);
  const out: Keyframe[] = [];
  let last = -0.0001;

  for (const point of sorted) {
    const { t, ease, ...props } = point;
    let offset = Math.min(1, Math.max(0, Number(t) / DURATION));
    if (offset <= last) offset = Math.min(1, last + 0.0004);
    last = offset;
    const frame: Keyframe = { ...props, offset };
    if (ease) frame.easing = ease;
    out.push(frame);
  }

  if (out.length === 0) return out;
  if ((out[0].offset as number) > 0) {
    const hold = { ...out[0], offset: 0 };
    delete hold.easing;
    out.unshift(hold);
  }
  if ((out[out.length - 1].offset as number) < 1) {
    const end = { ...out[out.length - 1], offset: 1 };
    delete end.easing;
    out.push(end);
  }
  return out;
}

export function fadeWindow(show: number, hide: number, enter = 0.5, exit = 0.4): Keyframe[] {
  return kf([
    { t: 0, opacity: 0 },
    { t: Math.max(0, show), opacity: 0, ease: EASE_IN },
    { t: show + enter, opacity: 1 },
    { t: hide, opacity: 1, ease: EASE_WIPE },
    { t: hide + exit, opacity: 0 },
  ]);
}
