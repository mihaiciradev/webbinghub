"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useTrack } from "@/components/brand-video/playback";

export function Track({
  frames,
  className,
  children,
  style,
}: {
  frames: Keyframe[];
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useTrack(ref, frames);
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

function RevealInner({ frames, className, children }: { frames: Keyframe[]; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  useTrack(ref, frames);
  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}

export function Reveal({
  frames,
  className,
  children,
}: {
  frames: Keyframe[];
  className?: string;
  children: ReactNode;
}) {
  return (
    <span className="bv-clip">
      <RevealInner frames={frames} className={className}>
        {children}
      </RevealInner>
    </span>
  );
}
