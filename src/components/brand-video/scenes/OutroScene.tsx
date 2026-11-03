"use client";

import Image from "next/image";
import { EASE_IN, EASE_WIPE, kf } from "@/lib/brand-video/timeline";
import { Reveal, Track } from "@/components/brand-video/Track";
import logo from "@/new/full_logo_gold.svg";

const wash = kf([
  { t: 0, clipPath: "inset(0 100% 0 0)" },
  { t: 25.9, clipPath: "inset(0 100% 0 0)", ease: EASE_WIPE },
  { t: 26.75, clipPath: "inset(0 0% 0 0)" },
  { t: 30, clipPath: "inset(0 0% 0 0)" },
]);

const logoIn = kf([
  { t: 0, opacity: 0, transform: "scale(1.8)", filter: "blur(12px)" },
  { t: 26.45, opacity: 0, transform: "scale(1.8)", filter: "blur(12px)", ease: EASE_IN },
  { t: 27.05, opacity: 1, transform: "scale(0.98)", filter: "blur(0px)" },
  { t: 27.35, opacity: 1, transform: "scale(1)", filter: "blur(0px)" },
  { t: 30, opacity: 1, transform: "scale(1)", filter: "blur(0px)" },
]);

const lineA = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 26.7, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 27.3, opacity: 1, transform: "translateY(0%)" },
  { t: 30, opacity: 1, transform: "translateY(0%)" },
]);

const lineB = kf([
  { t: 0, opacity: 0, transform: "translateY(115%)" },
  { t: 26.85, opacity: 0, transform: "translateY(115%)", ease: EASE_IN },
  { t: 27.45, opacity: 1, transform: "translateY(0%)" },
  { t: 30, opacity: 1, transform: "translateY(0%)" },
]);

const rule = kf([
  { t: 0, transform: "scaleX(0)" },
  { t: 27.2, transform: "scaleX(0)", ease: EASE_WIPE },
  { t: 27.85, transform: "scaleX(1)" },
  { t: 30, transform: "scaleX(1)" },
]);

const services = kf([
  { t: 0, opacity: 0, transform: "translateY(16px)" },
  { t: 27.4, opacity: 0, transform: "translateY(16px)", ease: EASE_IN },
  { t: 27.9, opacity: 1, transform: "translateY(0px)" },
  { t: 30, opacity: 1, transform: "translateY(0px)" },
]);

const url = kf([
  { t: 0, opacity: 0, transform: "translateY(14px)" },
  { t: 27.65, opacity: 0, transform: "translateY(14px)", ease: EASE_IN },
  { t: 28.1, opacity: 1, transform: "translateY(0px)" },
  { t: 30, opacity: 1, transform: "translateY(0px)" },
]);

export default function OutroScene() {
  return (
    <div className="bv-scene bv-outro">
      <Track className="bv-wash" frames={wash} />
      <div className="bv-outro-stack">
        <Track className="bv-logo-wrap" frames={logoIn}>
          <Image src={logo} alt="WebbingHUB" width={636} height={180} priority />
        </Track>
        <h2 className="bv-headline bv-headline-lg">
          <Reveal frames={lineA}>Let&apos;s build what</Reveal>
          <Reveal frames={lineB} className="bv-gold">
            your business needs.
          </Reveal>
        </h2>
        <Track className="bv-rule" frames={rule} />
        <Track className="bv-services" frames={services}>
          Custom platforms · Integrations · Business software
        </Track>
        <Track className="bv-url" frames={url}>
          webbinghub.io
        </Track>
      </div>
    </div>
  );
}
