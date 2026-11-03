"use client";

import { useRef } from "react";
import { EASE_IN, EASE_MOVE, EASE_WIPE, kf } from "@/lib/brand-video/timeline";
import { useTrack } from "@/components/brand-video/playback";
import { Reveal, Track } from "@/components/brand-video/Track";
import { BROKEN_LINES, NODES } from "./systemLayout";

function move(x0: number, y0: number, x1: number, y1: number, enter: number) {
  const scatter = `translate(${x0}px, ${y0}px)`;
  const aligned = `translate(${x1}px, ${y1}px)`;
  const exit = `translate(${x1}px, ${y1 - 28}px)`;
  return kf([
    { t: 0, opacity: 0, transform: scatter },
    { t: enter, opacity: 0, transform: scatter, ease: EASE_IN },
    { t: enter + 0.55, opacity: 1, transform: scatter },
    { t: 4, opacity: 1, transform: scatter, ease: EASE_MOVE },
    { t: 5.1, opacity: 1, transform: aligned },
    { t: 8.85, opacity: 1, transform: aligned, ease: EASE_WIPE },
    { t: 9.35, opacity: 0, transform: exit },
  ]);
}

const broken = kf([
  { t: 0, opacity: 0, strokeDashoffset: 1 },
  { t: 0.85, opacity: 0, strokeDashoffset: 1, ease: EASE_MOVE },
  { t: 2.5, opacity: 0.8, strokeDashoffset: 0.42 },
  { t: 3.9, opacity: 0.8, strokeDashoffset: 0.42, ease: EASE_WIPE },
  { t: 4.55, opacity: 0, strokeDashoffset: 0.42 },
]);

const headline = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 0.75, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 1.4, opacity: 1, transform: "translateY(0%)" },
  { t: 3.5, opacity: 1, transform: "translateY(0%)", ease: EASE_WIPE },
  { t: 4.05, opacity: 0, transform: "translateY(-50%)" },
]);

const sub = kf([
  { t: 0, opacity: 0, transform: "translateY(16px)" },
  { t: 1.35, opacity: 0, transform: "translateY(16px)", ease: EASE_IN },
  { t: 1.95, opacity: 1, transform: "translateY(0px)" },
  { t: 3.5, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
  { t: 4.05, opacity: 0, transform: "translateY(-12px)" },
]);

const mark = kf([
  { t: 0, opacity: 0, transform: "scale(0.6)" },
  { t: 6.15, opacity: 0, transform: "scale(0.6)", ease: EASE_IN },
  { t: 6.55, opacity: 1, transform: "scale(1)" },
  { t: 8.85, opacity: 1, transform: "scale(1)" },
  { t: 9.2, opacity: 0, transform: "scale(1)" },
]);

const NODE_FRAMES = NODES.map((node) =>
  move(node.scatter[0], node.scatter[1], node.aligned[0], node.aligned[1], node.enter),
);

function BrokenPath({ d }: { d: string }) {
  const ref = useRef<SVGPathElement>(null);
  useTrack(ref, broken);
  return <path ref={ref} d={d} pathLength={1} className="bv-line bv-line-dim" />;
}

export default function HookScene() {
  return (
    <div className="bv-scene bv-hook">
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
          <Track className="bv-check" frames={mark} aria-hidden="true">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <circle cx="8" cy="8" r="7" />
              <path d="M4.5 8.2 L7 10.5 L11.5 5.5" />
            </svg>
          </Track>
        </Track>
      ))}

      <div className="bv-center-copy">
        <h2 className="bv-headline">
          <Reveal frames={headline}>Disconnected systems.</Reveal>
        </h2>
        <Track className="bv-secondary" frames={sub}>
          Complex workflows. Manual work.
        </Track>
      </div>
    </div>
  );
}
