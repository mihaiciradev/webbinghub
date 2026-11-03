"use client";

import { useRef } from "react";
import { EASE_IN, EASE_MOVE, EASE_WIPE, kf } from "@/lib/brand-video/timeline";
import { useTrack } from "@/components/brand-video/playback";
import { Reveal, Track } from "@/components/brand-video/Track";

const ROLES = [
  { id: "ops", label: "Operations", note: "Daily work", x: 250, y: 348 },
  { id: "finance", label: "Finance", note: "Approvals", x: 1430, y: 348 },
  { id: "service", label: "Service team", note: "Delivery", x: 250, y: 708 },
  { id: "customers", label: "Customers", note: "Requests", x: 1430, y: 708 },
] as const;

const STAGES = [
  { id: "intake", label: "Intake", x: 510 },
  { id: "review", label: "Review", x: 750 },
  { id: "deliver", label: "Deliver", x: 990 },
  { id: "report", label: "Report", x: 1230 },
] as const;

const LINKS = [
  "M 370 384 L 615 560",
  "M 1550 384 L 1335 560",
  "M 370 744 L 1095 604",
  "M 1550 744 L 855 604",
];

function fade(show: number, hide = 21.45) {
  return kf([
    { t: 0, opacity: 0, transform: "translateY(16px)" },
    { t: show, opacity: 0, transform: "translateY(16px)", ease: EASE_IN },
    { t: show + 0.6, opacity: 1, transform: "translateY(0px)" },
    { t: hide, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
    { t: hide + 0.55, opacity: 0, transform: "translateY(-12px)" },
  ]);
}

function draw(delay: number) {
  return kf([
    { t: 0, opacity: 0, strokeDashoffset: 1 },
    { t: 11.1 + delay, opacity: 0, strokeDashoffset: 1, ease: EASE_MOVE },
    { t: 11.35 + delay, opacity: 0.85, strokeDashoffset: 1, ease: EASE_MOVE },
    { t: 12.7 + delay, opacity: 0.85, strokeDashoffset: 0 },
    { t: 21.45, opacity: 0.85, strokeDashoffset: 0, ease: EASE_WIPE },
    { t: 22, opacity: 0, strokeDashoffset: 0 },
  ]);
}

const glide = kf([
  { t: 0, opacity: 0, transform: "translate3d(300px, 0px, 0) scale(1.08)" },
  { t: 8.2, opacity: 0, transform: "translate3d(340px, 0px, 0) scale(1.08)", ease: EASE_MOVE },
  { t: 9.1, opacity: 1, transform: "translate3d(0px, 0px, 0) scale(1)" },
  { t: 21.5, opacity: 1, transform: "translate3d(0px, 0px, 0) scale(1)", ease: EASE_WIPE },
  { t: 22.05, opacity: 0, transform: "translate3d(0px, -16px, 0) scale(0.985)" },
]);

const map = kf([
  { t: 0, opacity: 1, transform: "scale(1.05)" },
  { t: 16.4, opacity: 1, transform: "scale(1.05)", ease: EASE_MOVE },
  { t: 18.2, opacity: 1, transform: "scale(1)" },
  { t: 22, opacity: 1, transform: "scale(1)" },
]);

const headline = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 8.4, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 9.05, opacity: 1, transform: "translateY(0%)" },
  { t: 21.45, opacity: 1, transform: "translateY(0%)", ease: EASE_WIPE },
  { t: 22, opacity: 0, transform: "translateY(-40%)" },
]);

const supportA = kf([
  { t: 0, opacity: 0, transform: "translateY(12px)" },
  { t: 9.7, opacity: 0, transform: "translateY(12px)", ease: EASE_IN },
  { t: 10.3, opacity: 1, transform: "translateY(0px)" },
  { t: 15.15, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
  { t: 15.65, opacity: 0, transform: "translateY(-10px)" },
]);

const supportB = kf([
  { t: 0, opacity: 0, transform: "translateY(12px)" },
  { t: 15.6, opacity: 0, transform: "translateY(12px)", ease: EASE_IN },
  { t: 16.2, opacity: 1, transform: "translateY(0px)" },
  { t: 21.45, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
  { t: 22, opacity: 0, transform: "translateY(-10px)" },
]);

const bottleneck = kf([
  { t: 0, opacity: 0, transform: "translateY(8px)" },
  { t: 13.3, opacity: 0, transform: "translateY(8px)", ease: EASE_IN },
  { t: 13.85, opacity: 1, transform: "translateY(0px)" },
  { t: 16.5, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
  { t: 17, opacity: 0, transform: "translateY(-8px)" },
]);

const opportunity = kf([
  { t: 0, opacity: 0, transform: "translateY(8px)" },
  { t: 16.85, opacity: 0, transform: "translateY(8px)", ease: EASE_IN },
  { t: 17.45, opacity: 1, transform: "translateY(0px)" },
  { t: 21.45, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
  { t: 22, opacity: 0, transform: "translateY(-8px)" },
]);

const ROLE_FRAMES = ROLES.map((_, i) => fade(8.55 + i * 0.32));
const STAGE_FRAMES = STAGES.map((_, i) => fade(11.7 + i * 0.32));
const LINK_FRAMES = LINKS.map((_, i) => draw(i * 0.28));

function MapPath({ d, frames }: { d: string; frames: Keyframe[] }) {
  const ref = useRef<SVGPathElement>(null);
  useTrack(ref, frames);
  return <path ref={ref} d={d} pathLength={1} className="bv-line" />;
}

export default function DiscoveryScene() {
  return (
    <Track className="bv-scene bv-discover" frames={glide}>
      <div className="bv-top-copy">
        <h2 className="bv-headline bv-headline-md">
          <Reveal frames={headline}>First, we understand your business.</Reveal>
        </h2>
        <div className="bv-support-slot">
          <Track className="bv-secondary" frames={supportA}>
            We sit down with you and your team.
          </Track>
          <Track className="bv-secondary bv-support-next" frames={supportB}>
            We learn how your business actually works.
          </Track>
        </div>
      </div>

      <Track className="bv-map" frames={map}>
        <svg className="bv-wires" viewBox="0 0 1920 1080" aria-hidden="true">
          {LINKS.map((d, i) => (
            <MapPath key={d} d={d} frames={LINK_FRAMES[i]} />
          ))}
        </svg>
        {ROLES.map((role, i) => (
          <Track key={role.id} className="bv-role" frames={ROLE_FRAMES[i]} style={{ left: role.x, top: role.y }}>
            <span className="bv-node-kicker">{role.note}</span>
            <span className="bv-role-title">{role.label}</span>
          </Track>
        ))}
        {STAGES.map((stage, i) => (
          <Track key={stage.id} className="bv-stage-card" frames={STAGE_FRAMES[i]} style={{ left: stage.x, top: 516 }}>
            <span className="bv-node-kicker">0{i + 1}</span>
            <span className="bv-role-title">{stage.label}</span>
            {stage.id === "review" && (
              <>
                <Track className="bv-flag bv-flag-warn" frames={bottleneck}>Bottleneck</Track>
                <Track className="bv-flag bv-flag-gold" frames={opportunity}>Opportunity</Track>
              </>
            )}
          </Track>
        ))}
      </Track>
    </Track>
  );
}
