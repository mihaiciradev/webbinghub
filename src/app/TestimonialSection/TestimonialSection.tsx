import styles from "./TestimonialSection.module.css";

export default function TestimonialSection() {
  return (
    <div className={`${styles.testimonial} reveal`}>
      <div className={styles.quoteWrap}>
        <blockquote className={styles.quote}>
          &ldquo;They understood exactly what we needed — and delivered
          something better than we imagined. Our direct bookings increased
          significantly within the first month after launch.&rdquo;
        </blockquote>
        <p className={styles.author}>Travel Agency Client — Paris, France</p>
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
