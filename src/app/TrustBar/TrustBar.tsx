import styles from "./TrustBar.module.css";

const CHECK = (
  <svg viewBox="0 0 10 10" fill="none" width={10} height={10}>
    <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ITEMS = [
  "Fixed pricing, no surprises",
  "Support after launch",
  "Built from scratch, not templates",
  "Clear communication throughout",
];

export default function TrustBar() {
  return (
    <div className={`${styles.bar} reveal`}>
      <span className={styles.intro}>Why clients choose us</span>
      <div className={`${styles.items} trust-items`}>
        {ITEMS.map((text) => (
          <div key={text} className={`${styles.item} reveal`}>
            <span className={styles.check}>{CHECK}</span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
