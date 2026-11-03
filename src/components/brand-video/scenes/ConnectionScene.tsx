"use client";

import { useRef } from "react";
import { EASE_IN, EASE_MOVE, EASE_WIPE, kf } from "@/lib/brand-video/timeline";
import { useTrack } from "@/components/brand-video/playback";
import { Reveal, Track } from "@/components/brand-video/Track";
import { CONNECTED_LINES, HUB, NODES, PACKETS } from "./systemLayout";

function linked(delay: number) {
  return kf([
    { t: 0, opacity: 0, strokeDashoffset: 1 },
    { t: 22.7 + delay, opacity: 0, strokeDashoffset: 1, ease: EASE_MOVE },
    { t: 23.1 + delay, opacity: 1, strokeDashoffset: 1, ease: EASE_MOVE },
    { t: 25.4 + delay, opacity: 1, strokeDashoffset: 0 },
    { t: 35.3, opacity: 1, strokeDashoffset: 0, ease: EASE_WIPE },
    { t: 36.05, opacity: 0, strokeDashoffset: 0 },
  ]);
}

function packet(start: number) {
  return kf([
    { t: 0, opacity: 0, offsetDistance: "0%" },
    { t: start, opacity: 0, offsetDistance: "0%", ease: EASE_MOVE },
    { t: start + 0.3, opacity: 1, offsetDistance: "6%" },
    { t: start + 2.4, opacity: 1, offsetDistance: "94%", ease: EASE_WIPE },
    { t: start + 2.8, opacity: 0, offsetDistance: "100%" },
  ]);
}

const hub = kf([
  { t: 0, opacity: 0, transform: "scale(0.94)" },
  { t: 22.35, opacity: 0, transform: "scale(0.94)", ease: EASE_IN },
  { t: 23.3, opacity: 1, transform: "scale(1)" },
  { t: 35.35, opacity: 1, transform: "scale(1)", ease: EASE_WIPE },
  { t: 36.05, opacity: 0, transform: "scale(0.98)" },
]);

function phase(start: number) {
  return kf([
    { t: 0, opacity: 0, transform: "translateY(10px)" },
    { t: start, opacity: 0, transform: "translateY(10px)", ease: EASE_IN },
    { t: start + 0.55, opacity: 1, transform: "translateY(0px)" },
    { t: 35.3, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
    { t: 35.95, opacity: 0, transform: "translateY(-8px)" },
  ]);
}

function nodeIn(delay: number) {
  return kf([
    { t: 0, opacity: 0, transform: "translateY(18px)" },
    { t: 22.4 + delay, opacity: 0, transform: "translateY(18px)", ease: EASE_IN },
    { t: 23.3 + delay, opacity: 1, transform: "translateY(0px)" },
    { t: 35.3, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
    { t: 36.05, opacity: 0, transform: "translateY(-14px)" },
  ]);
}

const PHASES = ["Discover", "Design", "Connect", "Build"];
const PHASE_FRAMES = PHASES.map((_, i) => phase(23.4 + i * 0.45));
const NODE_FRAMES = NODES.map((_, i) => nodeIn(i * 0.18));
const LINK_FRAMES = CONNECTED_LINES.map((_, i) => linked(i * 0.28));
const PACKET_FRAMES = [
  ...PACKETS.map((item) => packet(item.delay + 21.2)),
  ...PACKETS.map((item) => packet(item.delay + 26.4)),
];

const headline = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 22.25, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 23.05, opacity: 1, transform: "translateY(0%)" },
  { t: 35.25, opacity: 1, transform: "translateY(0%)", ease: EASE_WIPE },
  { t: 35.95, opacity: 0, transform: "translateY(-40%)" },
]);

const support = kf([
  { t: 0, opacity: 0, transform: "translateY(12px)" },
  { t: 23.2, opacity: 0, transform: "translateY(12px)", ease: EASE_IN },
  { t: 23.9, opacity: 1, transform: "translateY(0px)" },
  { t: 35.25, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
  { t: 35.95, opacity: 0, transform: "translateY(-10px)" },
]);

function LivePath({ d, frames }: { d: string; frames: Keyframe[] }) {
  const ref = useRef<SVGPathElement>(null);
  useTrack(ref, frames);
  return <path ref={ref} d={d} pathLength={1} className="bv-line" />;
}

function Packet({ d, frames }: { d: string; frames: Keyframe[] }) {
  const ref = useRef<HTMLSpanElement>(null);
  useTrack(ref, frames);
  return <span ref={ref} className="bv-packet" style={{ offsetPath: `path('${d}')` }} />;
}

export default function ConnectionScene() {
  return (
    <div className="bv-scene bv-connect">
      <svg className="bv-wires" viewBox="0 0 1920 1080" aria-hidden="true">
        {CONNECTED_LINES.map((d, i) => (
          <LivePath key={d} d={d} frames={LINK_FRAMES[i]} />
        ))}
      </svg>
      {PACKET_FRAMES.map((frames, i) => (
        <Packet key={`${PACKETS[i % PACKETS.length].d}-${i}`} d={PACKETS[i % PACKETS.length].d} frames={frames} />
      ))}

      {NODES.map((node, i) => (
        <Track
          key={node.id}
          className="bv-node"
          frames={NODE_FRAMES[i]}
          style={{ left: node.aligned[0], top: node.aligned[1] }}
        >
          <span className="bv-node-kicker">{node.hint}</span>
          <span className="bv-node-title">{node.label}</span>
        </Track>
      ))}

      <Track className="bv-hub" frames={hub} style={{ left: HUB.x, top: HUB.y, width: HUB.w, height: HUB.h }}>
        <span className="bv-node-kicker">Solution</span>
        <span className="bv-hub-title">WebbingHUB</span>
        <span className="bv-hub-sub">Shaped around the operation</span>
      </Track>

      <div className="bv-top-copy">
        <h2 className="bv-headline bv-headline-md">
          <Reveal frames={headline}>Then we design the right solution.</Reveal>
        </h2>
        <Track className="bv-secondary" frames={support}>
          Built around your workflows. Not the other way around.
        </Track>
      </div>
      <div className="bv-phases">
        {PHASES.map((name, i) => (
          <Track key={name} className="bv-phase" frames={PHASE_FRAMES[i]}>{name}</Track>
        ))}
      </div>
    </div>
  );
}
