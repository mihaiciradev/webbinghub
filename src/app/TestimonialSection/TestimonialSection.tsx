import styles from "./TestimonialSection.module.css";

export default function TestimonialSection() {
  return (
    <div className={`${styles.testimonial} reveal`}>
      <div className={styles.quoteWrap}>
        <blockquote className={styles.quote}>
          &ldquo;No templates, no compromises. We own our site, control our data,
          and compete on our own terms. That makes a real difference when you're
          trying to stand out.&rdquo;
        </blockquote>
        <p className={styles.author}>Business Owners & Teams Across Europe</p>
      </div>

      <div className={styles.numbers}>
        {[
          { num: "Zero", label: "Lock-in, ever" },
          { num: "6+",  label: "Years of experience" },
          { num: "EU",  label: "Clients across Europe" },
        ].map(({ num, label }) => (
          <div key={label} className={styles.numItem}>
            <p className={styles.num}>{num}</p>
            <p className={styles.numLabel}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
