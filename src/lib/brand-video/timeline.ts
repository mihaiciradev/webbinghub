/** Single cue sheet for the brand film. Edit timing here. */

export const DURATION = 78.5;
export const DURATION_MS = DURATION * 1000;

export const EASE_IN = "cubic-bezier(.2,.8,.2,1)";
export const EASE_MOVE = "cubic-bezier(.65,0,.25,1)";
export const EASE_WIPE = "cubic-bezier(.7,0,.2,1)";

export const SCENES = [
  { id: "problem", name: "The problem", start: 0, end: 9 },
  { id: "discover", name: "Understand the business", start: 9, end: 22 },
  { id: "design", name: "Design the solution", start: 22, end: 36 },
  { id: "build", name: "What we build", start: 36, end: 54 },
  { id: "engineering", name: "Engineering", start: 54, end: 65 },
  { id: "value", name: "The result", start: 65, end: 72 },
  { id: "outro", name: "Brand", start: 72, end: 78.5 },
] as const;

export type SceneId = (typeof SCENES)[number]["id"];

export const SUBTITLES = [
  { start: 0.4, end: 8.75, text: "When your tools don't work together, your people spend more time managing processes than moving the business forward." },
  { start: 9.25, end: 15.45, text: "We start by listening. We sit down with you and the people doing the work every day." },
  { start: 15.65, end: 21.65, text: "We take the time to understand your processes, challenges, and goals before designing a solution." },
  { start: 22.5, end: 28.5, text: "Once we understand the problem, we design software around the way your business needs to operate." },
  { start: 29, end: 35.5, text: "That might mean simplifying a workflow, connecting existing tools, or building something entirely new." },
  { start: 36.5, end: 41.5, text: "Internal platforms that help teams work more efficiently." },
  { start: 42, end: 47, text: "Customer portals that make services easier to access." },
  { start: 47.5, end: 53.5, text: "Booking systems, automation, and integrations that bring everything together." },
  { start: 54.25, end: 59.15, text: "Behind every simple experience, there's complex engineering that needs to work reliably." },
  { start: 59.35, end: 64.6, text: "We build the integrations, data flows, and business logic that make everything work together." },
  { start: 65.15, end: 71.6, text: "The goal isn't just to deliver software. It's to give your team tools that make everyday work simpler." },
  { start: 72.35, end: 78.15, text: "WebbingHUB. Custom software that connects your business." },
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

/** Build a keyframe list. `t` is seconds. `ease` eases into the next keyframe. */
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
