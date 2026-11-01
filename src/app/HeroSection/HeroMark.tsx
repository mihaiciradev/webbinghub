"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import fullLogoGold from "@/new/full_logo_gold.svg";
import styles from "./HeroSection.module.css";

const HeroLogo3D = dynamic(() => import("./HeroLogo3D"), { ssr: false });

// Phones skip the Three.js logo. The lab wait on mobile was JavaScript boot, and this scene is the heavy part.
const WIDE_QUERY = "(min-width: 768px)";

export default function HeroMark() {
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(WIDE_QUERY);
    const apply = () => setWide(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (wide) return <HeroLogo3D />;

  return (
    <Image
      src={fullLogoGold}
      alt="WebbingHUB"
      className={styles.logoStill}
    />
  );
}
