"use client";

import { EASE_IN, EASE_MOVE, EASE_WIPE, kf } from "@/lib/brand-video/timeline";
import { Reveal, Track } from "@/components/brand-video/Track";

const shell = kf([
  { t: 0, opacity: 0, transform: "translateY(36px)" },
  { t: 15.9, opacity: 0, transform: "translateY(36px)", ease: EASE_MOVE },
  { t: 16.6, opacity: 1, transform: "translateY(0px)" },
  { t: 21.7, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
  { t: 22.25, opacity: 0, transform: "translateY(-24px)" },
]);

const headline = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 16.15, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 16.8, opacity: 1, transform: "translateY(0%)" },
  { t: 21.65, opacity: 1, transform: "translateY(0%)", ease: EASE_WIPE },
  { t: 22.2, opacity: 0, transform: "translateY(-40%)" },
]);

function step(index: number) {
  const start = 16.7 + index * 0.22;
  return kf([
    { t: 0, opacity: 0, transform: "translateY(18px)" },
    { t: start, opacity: 0, transform: "translateY(18px)", ease: EASE_IN },
    { t: start + 0.45, opacity: 1, transform: "translateY(0px)" },
    { t: 21.7, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
    { t: 22.2, opacity: 0, transform: "translateY(-12px)" },
  ]);
}

const FLOW = ["Frontend", "API layer", "Business logic", "External systems"];
const DEPTH = ["Validation", "Data transformation", "Error handling", "Reliable integration"];
const FLOW_FRAMES = FLOW.map((_, i) => step(i));
const DEPTH_FRAMES = DEPTH.map((_, i) => step(i + 3));

const tick = kf([
  { t: 0, opacity: 0, transform: "scale(0.7)" },
  { t: 20.3, opacity: 0, transform: "scale(0.7)", ease: EASE_IN },
  { t: 20.8, opacity: 1, transform: "scale(1)" },
  { t: 21.7, opacity: 1, transform: "scale(1)" },
  { t: 22.15, opacity: 0, transform: "scale(1)" },
]);

export default function EngineeringScene() {
  return (
    <div className="bv-scene bv-engineering">
      <div className="bv-top-copy bv-top-copy-left">
        <h2 className="bv-headline bv-headline-md">
          <Reveal frames={headline}>Engineering beyond the interface.</Reveal>
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
    </div>
  );
}
