import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <div className={styles.about}>
      <div className="reveal">
        <p className={styles.label}>About WebbingHUB</p>
        <h2 className={styles.heading}>
          A small team.<br /><em>A serious commitment.</em>
        </h2>
      </div>

      <div className={`${styles.body} reveal`}>
        <p>
          WebbingHUB is a web development agency run by people who genuinely
          care about the quality of their work. We combine technical expertise
          with a real understanding of how businesses operate — so the websites
          we build aren&apos;t just beautiful, they&apos;re useful.
        </p>
        <blockquote className={styles.quote}>
          Every project gets the same attention — whether it&apos;s a hotel
          in Paris or a local business in Romania. No junior handoffs,
          no cut corners.
        </blockquote>
        <p>
          When you work with WebbingHUB, you talk directly with the people
          building your website. And when it launches, we stay close.
        </p>
      </div>
      {/* Stat strip — Magic Stats pattern, across full width below copy */}
      <div className={`${styles.statStrip} reveal`}>
        {[
          { num: "Zero", label: "Lock-In" },
          { num: "6+",   label: "Years of Expertise" },
          { num: "EU",   label: "Clients Across Europe" },
          { num: "100%", label: "Owned by You" },
        ].map(({ num, label }, i) => (
          <div key={label} className={`${styles.statItem} ${i > 0 ? styles.statItemBorder : ""}`}>
            <p className={styles.statNum}>{num}</p>
            <p className={styles.statLabel}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
