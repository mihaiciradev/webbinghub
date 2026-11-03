import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant, Jost } from "next/font/google";
import VideoStage from "@/components/brand-video/VideoStage";
import { PlaybackProvider } from "@/components/brand-video/playback";
import "@/components/brand-video/brand-video.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--bv-sans",
  display: "swap",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--bv-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: { absolute: "WebbingHUB brand video" },
  description: "Internal recording stage. Not for indexing.",
  robots: { index: false, follow: false, nocache: true },
};

export default function BrandVideoPage({
  searchParams,
}: {
  searchParams: { autoplay?: string; t?: string };
}) {
  if (process.env.NODE_ENV === "production") notFound();

  const parsed = Number(searchParams.t);
  const startAt = Number.isFinite(parsed) ? parsed : 0;

  return (
    <div className={`${jost.variable} ${cormorant.variable}`}>
      <PlaybackProvider autoplay={searchParams.autoplay === "1"} startAt={startAt}>
        <VideoStage />
      </PlaybackProvider>
    </div>
  );
}
