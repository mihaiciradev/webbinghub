"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import logoGold from "@/new/logo_gold.svg";
import styles from "./CTASection.module.css";

const CTAMark3D = dynamic(() => import("./CTAMark3D"), { ssr: false });

// Same rule as the hero: phones get the flat mark, wide screens the 3D one.
const WIDE_QUERY = "(min-width: 768px)";

/**
 * The flat mascot is there from the first paint (fixed box, no layout shift).
 * At the first idle moment after hydration, the 3D scene mounts on top,
 * so it is built well before anyone scrolls down to this section.
 */
export default function CTAMark() {
  const [mount3D, setMount3D] = useState(false);
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    if (!window.matchMedia(WIDE_QUERY).matches) return;

    // First quiet moment after hydration (at most 2.5s), not the full `load`
    // event, which waits for every embed on the page.
    let idleId: number | undefined;
    let timer: number | undefined;
    const go = () => setMount3D(true);
    // Safari has no requestIdleCallback
    if (typeof window.requestIdleCallback === "function") idleId = window.requestIdleCallback(go, { timeout: 2500 });
    else timer = setTimeout(go, 1200) as unknown as number;

    return () => {
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timer !== undefined) clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`${styles.mark} ${ready ? styles.markReady : ""}`}>
      <span className={styles.markGlow} aria-hidden="true" />
      <Image src={logoGold} alt="" className={styles.markStill} aria-hidden="true" />
      {mount3D && <CTAMark3D onReady={onReady} />}
    </div>
  );
}
