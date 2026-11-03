"use client";

import { EASE_IN, EASE_MOVE, EASE_WIPE, kf } from "@/lib/brand-video/timeline";
import { Reveal, Track } from "@/components/brand-video/Track";

const line1 = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 22.05, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 22.7, opacity: 1, transform: "translateY(0%)" },
  { t: 25.7, opacity: 1, transform: "translateY(0%)", ease: EASE_WIPE },
  { t: 26.25, opacity: 0, transform: "translateY(-30%)" },
]);

const line2 = kf([
  { t: 0, opacity: 0, transform: "translateY(14px)" },
  { t: 22.55, opacity: 0, transform: "translateY(14px)", ease: EASE_IN },
  { t: 23.15, opacity: 1, transform: "translateY(0px)" },
  { t: 25.7, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
  { t: 26.25, opacity: 0, transform: "translateY(-16px)" },
]);

function chip(index: number) {
  const start = 23.15 + index * 0.16;
  return kf([
    { t: 0, opacity: 0, transform: "translateY(16px)" },
    { t: start, opacity: 0, transform: "translateY(16px)", ease: EASE_IN },
    { t: start + 0.45, opacity: 1, transform: "translateY(0px)" },
    { t: 25.75, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
    { t: 26.3, opacity: 0, transform: "translateY(-18px)" },
  ]);
}

const link = kf([
  { t: 0, opacity: 1, transform: "scaleX(0)" },
  { t: 23.2, opacity: 1, transform: "scaleX(0)", ease: EASE_MOVE },
  { t: 24.1, opacity: 1, transform: "scaleX(1)" },
  { t: 25.8, opacity: 1, transform: "scaleX(1)", ease: EASE_WIPE },
  { t: 26.25, opacity: 0, transform: "scaleX(1)" },
]);

const LABELS = ["Platforms", "Integrations", "Automation"];
const LABEL_FRAMES = LABELS.map((_, i) => chip(i));

export default function ValueScene() {
  return (
    <div className="bv-scene bv-value">
      <h2 className="bv-headline bv-headline-xl">
        <Reveal frames={line1}>Your workflow. Your software.</Reveal>
      </h2>
      <Track className="bv-secondary bv-secondary-lg" frames={line2}>
        From business problem to working solution.
      </Track>
      <div className="bv-values">
        <Track className="bv-value-line" frames={link} />
        {LABELS.map((label, i) => (
          <Track key={label} className="bv-value-chip" frames={LABEL_FRAMES[i]}>
            {label}
          </Track>
        ))}
      </div>
    </div>
  );
}
