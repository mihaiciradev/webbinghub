"use client";

import { EASE_IN, EASE_MOVE, EASE_WIPE, kf } from "@/lib/brand-video/timeline";
import { Reveal, Track } from "@/components/brand-video/Track";

const line1 = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 64.45, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 65.1, opacity: 1, transform: "translateY(0%)" },
  { t: 71.5, opacity: 1, transform: "translateY(0%)", ease: EASE_WIPE },
  { t: 72.05, opacity: 0, transform: "translateY(-30%)" },
]);

const line2 = kf([
  { t: 0, opacity: 0, transform: "translateY(14px)" },
  { t: 65.7, opacity: 0, transform: "translateY(14px)", ease: EASE_IN },
  { t: 66.3, opacity: 1, transform: "translateY(0px)" },
  { t: 71.5, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
  { t: 72.05, opacity: 0, transform: "translateY(-16px)" },
]);

function chip(index: number) {
  const start = 66.35 + index * 0.22;
  return kf([
    { t: 0, opacity: 0, transform: "translateY(16px)" },
    { t: start, opacity: 0, transform: "translateY(16px)", ease: EASE_IN },
    { t: start + 0.55, opacity: 1, transform: "translateY(0px)" },
    { t: 71.5, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
    { t: 72.05, opacity: 0, transform: "translateY(-18px)" },
  ]);
}

const link = kf([
  { t: 0, opacity: 1, transform: "scaleX(0)" },
  { t: 66.55, opacity: 1, transform: "scaleX(0)", ease: EASE_MOVE },
  { t: 67.45, opacity: 1, transform: "scaleX(1)" },
  { t: 71.5, opacity: 1, transform: "scaleX(1)", ease: EASE_WIPE },
  { t: 72.05, opacity: 0, transform: "scaleX(1)" },
]);

const LABELS = ["Platforms", "Portals", "Integrations"];
const LABEL_FRAMES = LABELS.map((_, i) => chip(i));

const glide = kf([
  { t: 0, opacity: 0, transform: "translate3d(280px, 0px, 0) scale(1.07)" },
  { t: 64.2, opacity: 0, transform: "translate3d(320px, 0px, 0) scale(1.07)", ease: EASE_MOVE },
  { t: 65.1, opacity: 1, transform: "translate3d(0px, 0px, 0) scale(1)" },
  { t: 71.55, opacity: 1, transform: "translate3d(0px, 0px, 0) scale(1)", ease: EASE_WIPE },
  { t: 72.1, opacity: 0, transform: "translate3d(0px, -12px, 0) scale(0.99)" },
]);

export default function ValueScene() {
  return (
    <Track className="bv-scene bv-value" frames={glide}>
      <h2 className="bv-headline bv-headline-xl">
        <Reveal frames={line1}>Technology that works for your business.</Reveal>
      </h2>
      <Track className="bv-secondary bv-secondary-lg" frames={line2}>
        Less friction. Better workflows. Room to grow.
      </Track>
      <div className="bv-values">
        <Track className="bv-value-line" frames={link} />
        {LABELS.map((label, i) => (
          <Track key={label} className="bv-value-chip" frames={LABEL_FRAMES[i]}>
            {label}
          </Track>
        ))}
      </div>
    </Track>
  );
}
