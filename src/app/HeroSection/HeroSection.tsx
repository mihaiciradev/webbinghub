import styles from "./HeroSection.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroLogo3D = dynamic(() => import("./HeroLogo3D"), {
  ssr: false,
  loading: () => <div className={styles.logoPlaceholder} />,
});

export default function HeroSection() {
  return (
    <section className={styles.hero}>

      {/* ── LEFT — text content ───────────────────── */}
      <div className={styles.heroLeft}>
        <p className={styles.eyebrow}>Web Development Agency</p>

        <h1 className={styles.title}>
          Your website should work<br />
          <em>as hard as you do.</em>
        </h1>

        <p className={styles.body}>
          We build custom websites and digital tools that help your business
          grow online. No templates, no guesswork — just the right solution
          for your goals, built properly and supported long after launch.
        </p>

        <div className={styles.actions}>
          <Link href="/#contact" className={styles.btnDark}>
            Start a conversation →
          </Link>
          <Link href="/#services" className={styles.btnOutline}>
            What we build
          </Link>
        </div>

        <div className={styles.badges}>
          <span className={styles.badge}><span className={styles.dot} />Based in Romania</span>
          <span className={styles.badge}><span className={styles.dot} />Clients across Europe</span>
          <span className={styles.badge}><span className={styles.dot} />6+ years experience</span>
        </div>
      </div>

      {/* ── RIGHT — 3-D logo + tagline ────────────── */}
      <div className={styles.heroRight}>
        {/* large decorative letterform — visual anchor */}
        <span className={styles.decoW} aria-hidden="true">W</span>

        <div className={styles.logoWrap}>
          <HeroLogo3D />
        </div>

        <p className={styles.tagline}>Custom · Built · Owned</p>
      </div>

    </section>
  );
}
