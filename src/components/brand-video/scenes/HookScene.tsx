"use client";

import { useRef } from "react";
import { EASE_IN, EASE_MOVE, EASE_WIPE, kf } from "@/lib/brand-video/timeline";
import { useTrack } from "@/components/brand-video/playback";
import { Reveal, Track } from "@/components/brand-video/Track";
import { BROKEN_LINES, NODES } from "./systemLayout";

const ENTERS = [0.5, 1.35, 2.15, 2.95, 3.7];

function arrive(x: number, y: number, enter: number) {
  const at = `translate(${x}px, ${y}px)`;
  return kf([
    { t: 0, opacity: 0, transform: at },
    { t: enter, opacity: 0, transform: at, ease: EASE_IN },
    { t: enter + 0.85, opacity: 1, transform: at },
    { t: 9.2, opacity: 1, transform: at },
  ]);
}

const broken = kf([
  { t: 0, opacity: 0, strokeDashoffset: 1 },
  { t: 1.4, opacity: 0, strokeDashoffset: 1, ease: EASE_MOVE },
  { t: 4.6, opacity: 0.8, strokeDashoffset: 0.4 },
  { t: 9.15, opacity: 0.8, strokeDashoffset: 0.4 },
]);

const headline = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 1.1, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 1.9, opacity: 1, transform: "translateY(0%)" },
  { t: 9.2, opacity: 1, transform: "translateY(0%)" },
]);

const sub = kf([
  { t: 0, opacity: 0, transform: "translateY(16px)" },
  { t: 2.3, opacity: 0, transform: "translateY(16px)", ease: EASE_IN },
  { t: 3.1, opacity: 1, transform: "translateY(0px)" },
  { t: 9.2, opacity: 1, transform: "translateY(0px)" },
]);

function pulse(start: number) {
  return kf([
    { t: 0, opacity: 0.88 },
    { t: start, opacity: 0.88, ease: EASE_IN },
    { t: start + 0.3, opacity: 1 },
    { t: start + 1.05, opacity: 1, ease: EASE_WIPE },
    { t: start + 1.35, opacity: 0.88 },
    { t: 9.2, opacity: 0.88 },
  ]);
}

const manual = kf([
  { t: 0, opacity: 0, transform: "translateY(14px)" },
  { t: 5.15, opacity: 0, transform: "translateY(14px)", ease: EASE_IN },
  { t: 5.8, opacity: 1, transform: "translateY(0px)" },
  { t: 9.2, opacity: 1, transform: "translateY(0px)" },
]);

const NODE_FRAMES = NODES.map((node, i) => arrive(node.scatter[0], node.scatter[1], ENTERS[i]));
const PULSES = [pulse(6.1), pulse(7), pulse(7.9)];

const glide = kf([
  { t: 0, opacity: 1, transform: "translate3d(0px, 0px, 0) scale(1)" },
  { t: 8.15, opacity: 1, transform: "translate3d(0px, 0px, 0) scale(1)", ease: EASE_MOVE },
  { t: 8.5, opacity: 1, transform: "translate3d(-40px, 0px, 0) scale(0.93)" },
  { t: 9.15, opacity: 0, transform: "translate3d(-320px, 0px, 0) scale(0.86)" },
]);

function BrokenPath({ d }: { d: string }) {
  const ref = useRef<SVGPathElement>(null);
  useTrack(ref, broken);
  return <path ref={ref} d={d} pathLength={1} className="bv-line bv-line-dim" />;
}

export default function HookScene() {
  return (
    <Track className="bv-scene bv-hook" frames={glide}>
      <svg className="bv-wires" viewBox="0 0 1920 1080" aria-hidden="true">
        {BROKEN_LINES.map((d) => (
          <BrokenPath key={d} d={d} />
        ))}
      </svg>

      {NODES.map((node) => (
        <Track
          key={node.id}
          className="bv-node"
          frames={NODE_FRAMES[NODES.indexOf(node)]}
        >
          <span className="bv-node-kicker">{node.hint}</span>
          <span className="bv-node-title">{node.label}</span>
        </Track>
      ))}

      <div className="bv-center-copy">
        <h2 className="bv-headline bv-headline-md">
          <Reveal frames={headline}>Business gets complicated.</Reveal>
        </h2>
        <Track className="bv-secondary" frames={sub}>
          Disconnected systems. Repetitive tasks. Information scattered everywhere.
        </Track>
        <Track className="bv-manual" frames={manual}>
          {["Copy into a sheet", "Email the update", "Enter it again"].map((step, i) => (
            <Track key={step} className="bv-task" frames={PULSES[i]}>{step}</Track>
          ))}
        </Track>
      </div>
    </Track>
  );
}
