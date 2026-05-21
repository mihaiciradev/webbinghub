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
          &ldquo;We work with clients from across Europe — from travel agencies
          in Paris to service businesses in Romania — and we treat every project
          as if it were our own.&rdquo;
        </blockquote>
        <p>
          When you work with WebbingHUB, you talk directly with the people
          building your website. And when it launches, we stay close.
        </p>
      </div>
    </div>
  );
}
