"use client";

import { useEffect, useState } from "react";
import { DURATION, sceneAt } from "@/lib/brand-video/timeline";
import { usePlayback } from "@/components/brand-video/playback";

function format(time: number) {
  return time.toFixed(2);
}

export default function TimelineControls({
  onFullscreen,
}: {
  onFullscreen: () => void;
}) {
  const api = usePlayback();
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => api.subscribe((next, isPlaying) => {
    setTime(next);
    setPlaying(isPlaying);
  }), [api]);

  const scene = sceneAt(time);

  return (
    <div className="bv-controls" role="region" aria-label="Recording controls">
      <button type="button" onClick={api.toggle}>{playing ? "Pause" : "Play"}</button>
      <button type="button" onClick={api.restart}>Restart</button>
      <button type="button" onClick={api.prev}>Previous</button>
      <button type="button" onClick={api.next}>Next</button>
      <label className="bv-scrub">
        <span className="bv-time">{format(time)} / {format(DURATION)}</span>
        <input
          type="range"
          min={0}
          max={DURATION}
          step={0.01}
          value={time}
          aria-label="Seek"
          onChange={(event) => api.seek(Number(event.target.value))}
        />
      </label>
      <span className="bv-scene-name">{scene.name}</span>
      <button type="button" onClick={onFullscreen}>Fullscreen</button>
      <p className="bv-help">Space play · Enter start · R restart · Arrows scenes · F fullscreen · H timecode · Esc reset</p>
    </div>
  );
}
