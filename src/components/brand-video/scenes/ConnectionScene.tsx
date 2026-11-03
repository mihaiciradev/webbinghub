"use client";

import { useRef } from "react";
import { EASE_IN, EASE_MOVE, EASE_WIPE, kf } from "@/lib/brand-video/timeline";
import { useTrack } from "@/components/brand-video/playback";
import { Reveal, Track } from "@/components/brand-video/Track";
import { CONNECTED_LINES, HUB, PACKETS } from "./systemLayout";

function linked(delay: number) {
  return kf([
    { t: 0, opacity: 0, strokeDashoffset: 1 },
    { t: 4.35 + delay, opacity: 0, strokeDashoffset: 1, ease: EASE_MOVE },
    { t: 4.55 + delay, opacity: 1, strokeDashoffset: 1, ease: EASE_MOVE },
    { t: 5.55 + delay, opacity: 1, strokeDashoffset: 0 },
    { t: 8.8, opacity: 1, strokeDashoffset: 0, ease: EASE_WIPE },
    { t: 9.3, opacity: 0, strokeDashoffset: 0 },
  ]);
}

function packet(start: number) {
  return kf([
    { t: 0, opacity: 0, offsetDistance: "0%" },
    { t: start, opacity: 0, offsetDistance: "0%", ease: EASE_MOVE },
    { t: start + 0.25, opacity: 1, offsetDistance: "8%" },
    { t: start + 1.7, opacity: 1, offsetDistance: "92%", ease: EASE_WIPE },
    { t: start + 2.05, opacity: 0, offsetDistance: "100%" },
  ]);
}

const hub = kf([
  { t: 0, opacity: 0, transform: "scale(0.94)" },
  { t: 4.2, opacity: 0, transform: "scale(0.94)", ease: EASE_IN },
  { t: 4.95, opacity: 1, transform: "scale(1)" },
  { t: 8.8, opacity: 1, transform: "scale(1)", ease: EASE_WIPE },
  { t: 9.3, opacity: 0, transform: "scale(0.98)" },
]);

function label(start: number) {
  return kf([
    { t: 0, opacity: 0, transform: "translateY(10px)" },
    { t: start, opacity: 0, transform: "translateY(10px)", ease: EASE_IN },
    { t: start + 0.45, opacity: 1, transform: "translateY(0px)" },
    { t: 8.75, opacity: 1, transform: "translateY(0px)", ease: EASE_WIPE },
    { t: 9.2, opacity: 0, transform: "translateY(-8px)" },
  ]);
}

const LABEL_FRAMES = [label(5.05), label(5.4), label(5.75)];
const LINK_FRAMES = CONNECTED_LINES.map((_, i) => linked(i * 0.12));
const PACKET_FRAMES = PACKETS.map((item) => packet(item.delay));

const headline = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 4.2, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 4.85, opacity: 1, transform: "translateY(0%)" },
  { t: 8.55, opacity: 1, transform: "translateY(0%)", ease: EASE_WIPE },
  { t: 9.15, opacity: 0, transform: "translateY(-40%)" },
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
      {PACKETS.map((item) => (
        <Packet key={item.d} d={item.d} frames={PACKET_FRAMES[PACKETS.indexOf(item)]} />
      ))}

      <Track className="bv-hub" frames={hub} style={{ left: HUB.x, top: HUB.y, width: HUB.w, height: HUB.h }}>
        <span className="bv-node-kicker">Engineering layer</span>
        <span className="bv-hub-title">WebbingHUB</span>
        <span className="bv-hub-sub">Connect the systems you already run</span>
      </Track>

      <Track className="bv-verb bv-verb-a" frames={LABEL_FRAMES[0]}>Connect</Track>
      <Track className="bv-verb bv-verb-b" frames={LABEL_FRAMES[1]}>Transform</Track>
      <Track className="bv-verb bv-verb-c" frames={LABEL_FRAMES[2]}>Sync</Track>

      <div className="bv-top-copy">
        <h2 className="bv-headline">
          <Reveal frames={headline}>We connect the pieces.</Reveal>
        </h2>
      </div>
    </div>
  );
}
