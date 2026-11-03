"use client";

import { EASE_IN, EASE_MOVE, EASE_WIPE, kf } from "@/lib/brand-video/timeline";
import { Reveal, Track } from "@/components/brand-video/Track";

const shell = kf([
  { t: 0, opacity: 0, transform: "translateY(36px)" },
  { t: 54.25, opacity: 0, transform: "translateY(36px)", ease: EASE_MOVE },
  { t: 55, opacity: 1, transform: "translateY(0px)" },
  { t: 65.15, opacity: 1, transform: "translateY(0px)" },
]);

const headline = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 54.1, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 54.75, opacity: 1, transform: "translateY(0%)" },
  { t: 58.95, opacity: 1, transform: "translateY(0%)", ease: EASE_WIPE },
  { t: 59.45, opacity: 0, transform: "translateY(-40%)" },
]);

const headlineB = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 59.25, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 59.9, opacity: 1, transform: "translateY(0%)" },
  { t: 65.15, opacity: 1, transform: "translateY(0%)" },
]);

function step(index: number) {
  const start = 54.7 + index * 0.28;
  return kf([
    { t: 0, opacity: 0, transform: "translateY(18px)" },
    { t: start, opacity: 0, transform: "translateY(18px)", ease: EASE_IN },
    { t: start + 0.5, opacity: 1, transform: "translateY(0px)" },
    { t: 65.15, opacity: 1, transform: "translateY(0px)" },
  ]);
}

const FLOW = ["Frontend", "API layer", "Business logic", "External systems"];
const DEPTH = ["Validation", "Data transformation", "Error handling", "Reliable integration"];
const FLOW_FRAMES = FLOW.map((_, i) => step(i));
const DEPTH_FRAMES = DEPTH.map((_, i) => step(i + 3));

const tick = kf([
  { t: 0, opacity: 0, transform: "scale(0.7)" },
  { t: 61.5, opacity: 0, transform: "scale(0.7)", ease: EASE_IN },
  { t: 62.05, opacity: 1, transform: "scale(1)" },
  { t: 65.15, opacity: 1, transform: "scale(1)" },
]);

const glide = kf([
  { t: 0, opacity: 1, transform: "translate3d(0px, 0px, 0) scale(1)" },
  { t: 64.15, opacity: 1, transform: "translate3d(0px, 0px, 0) scale(1)", ease: EASE_MOVE },
  { t: 64.5, opacity: 1, transform: "translate3d(-36px, 0px, 0) scale(0.94)" },
  { t: 65.15, opacity: 0, transform: "translate3d(-300px, 0px, 0) scale(0.86)" },
]);

export default function EngineeringScene() {
  return (
    <Track className="bv-scene bv-engineering" frames={glide}>
      <div className="bv-top-copy bv-top-copy-left">
        <h2 className="bv-headline bv-headline-md">
          <Reveal frames={headline}>More than a beautiful interface.</Reveal>
        </h2>
        <h2 className="bv-headline bv-headline-md bv-headline-swap">
          <Reveal frames={headlineB}>Reliable engineering underneath.</Reveal>
        </h2>
      </div>
      <Track className="bv-arch" frames={shell}>
        <div className="bv-flow">
          {FLOW.map((name, i) => (
            <Track key={name} className="bv-step" frames={FLOW_FRAMES[i]}>
              <span>0{i + 1}</span>
              <strong>{name}</strong>
            </Track>
          ))}
        </div>
        <div className="bv-depth">
          {DEPTH.map((name, i) => (
            <Track key={name} className="bv-chip" frames={DEPTH_FRAMES[i]}>
              {name}
            </Track>
          ))}
        </div>
        <Track className="bv-pass" frames={tick}>
          <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
            <circle cx="10" cy="10" r="8" />
            <path d="M6 10.2 L9 13 L14 7" />
          </svg>
          Flow resolved
        </Track>
      </Track>
    </Track>
  );
}
