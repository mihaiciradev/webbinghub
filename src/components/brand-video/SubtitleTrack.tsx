"use client";

import { useRef } from "react";
import { EASE_IN, EASE_WIPE, SUBTITLES, kf } from "@/lib/brand-video/timeline";
import { useTrack } from "@/components/brand-video/playback";

function cue(start: number, end: number) {
  return kf([
    { t: 0, opacity: 0 },
    { t: Math.max(0, start - 0.02), opacity: 0, ease: EASE_IN },
    { t: start + 0.28, opacity: 1 },
    { t: Math.max(start + 0.3, end - 0.28), opacity: 1, ease: EASE_WIPE },
    { t: end, opacity: 0 },
  ]);
}

const CUES = SUBTITLES.map((item) => cue(item.start, item.end));

function Line({ text, frames }: { text: string; frames: Keyframe[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useTrack(ref, frames);
  return <p ref={ref} className="bv-sub">{text}</p>;
}

export default function SubtitleTrack() {
  return (
    <div className="bv-subs" aria-live="off">
      {SUBTITLES.map((item, i) => (
        <Line key={item.start} text={item.text} frames={CUES[i]} />
      ))}
    </div>
  );
}
