"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import fullLogoGold from "@/new/full_logo_gold.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo}>
        <Image
          src={fullLogoGold}
          alt="WebbingHUB"
          className={styles.logoImg}
          priority
        />
      </Link>

      <ul className={styles.navLinks}>
        <li><Link href="/#services">Services</Link></li>
        <li><Link href="/#process">How it works</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>

      <Link href="/#contact" className={styles.navCta}>
        Get in touch
      </Link>
    </nav>
  );
}
