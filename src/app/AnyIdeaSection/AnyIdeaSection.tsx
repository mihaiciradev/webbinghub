"use client";

import React, { useEffect, useRef } from "react";
import styles from "./AnyIdeaSection.module.css";
import { FlexBox } from "@/components/FlexBox";
import Compass from "@/components/Compass/Compass";
import Image from "next/image";
import rocket from "@/assets/rocket.svg";

export default function AnyIdeaSection() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [topRef, bottomRef];
    const observers: IntersectionObserver[] = [];

    refs.forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.visible);
            observer.unobserve(el);
          }
        },
        { threshold: 0.25 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <FlexBox
      sx={{ flexDirection: "column", gap: "1rem", padding: "6rem 1rem" }}
      id="websites"
    >
      <div ref={topRef} className={styles.revealWrapper}>
        <FlexBox className={styles.pageHeader}>
          <h1>any website.</h1>
          <h1>any idea.</h1>
          <h1>any business.</h1>
        </FlexBox>
      </div>

      <Compass />

      <div ref={bottomRef} className={styles.revealWrapper}>
        <FlexBox className={styles.pageHeaderBottom}>
          <h2>carefully projected, tailored, launched and maintained.</h2>
        </FlexBox>
      </div>

      <Image
        src={rocket}
        alt="webbing hub launch"
        className={styles.rocket}
        priority={false}
      />
    </FlexBox>
  );
}
