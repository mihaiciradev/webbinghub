"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import fullLogoGold from "@/new/full_logo_gold.svg";
import onlyTextGold from "@/new/only_text_gold.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand col */}
        <div>
          <div className={styles.logos}>
            <Image src={fullLogoGold} alt="WebbingHUB mascot" className={styles.mascotLogo} />
            <Image src={onlyTextGold} alt="WebbingHUB" className={styles.textLogo} />
          </div>
          <p className={styles.tagline}>Crafting websites that work.</p>
          <p className={styles.contact}>
            <a href="mailto:sales@webbinghub.io">sales@webbinghub.io</a>
          </p>
          <p className={styles.contact}>+40 736 394 784</p>
        </div>

        {/* Navigation col */}
        <div>
          <p className={styles.colTitle}>Navigation</p>
          <ul className={styles.colLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#process">How it works</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Sub-brands col */}
        <div>
          <p className={styles.colTitle}>Sub-brands</p>
          <ul className={styles.colLinks}>
            <li>
              <a href="https://travel.webbinghub.io" target="_blank" rel="noopener noreferrer">
                TRAVEL by WebbingHUB
              </a>
            </li>
            <li>
              <span style={{ opacity: 0.4 }}>HORECA by WebbingHUB — soon</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 WebbingHUB. All rights reserved. · Timișoara, Romania</span>
        <span>webbinghub.io</span>
      </div>
    </footer>
  );
}
