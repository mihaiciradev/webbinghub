import styles from "./ProcessSection.module.css";

const STEPS = [
  {
    num: "01",
    title: "Discovery call",
    desc: "We listen first. We learn about your business, goals, and users before suggesting anything.",
  },
  {
    num: "02",
    title: "Scoped proposal",
    desc: "A clear brief with deliverables, timeline, and a fixed price agreed before any work begins.",
  },
  {
    num: "03",
    title: "Build & launch",
    desc: "We build, test, and deploy — keeping you informed at every stage, not just at the end.",
  },
  {
    num: "04",
    title: "Ongoing support",
    desc: "Maintenance, updates, and improvements as your business grows. We're here after go-live.",
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.top}>
        <div className="reveal">
          <p className={styles.label}>How we work</p>
          <h2 className={styles.heading}>
            A process built<br />around <em>clarity.</em>
          </h2>
        </div>
        <p className={`${styles.intro} reveal`}>
          Before we write a single line of code, you know exactly what
          you&apos;re getting, when, and for how much. And after launch, we
          don&apos;t disappear — we stay close and keep your site running well.
        </p>
      </div>

      <div className={`${styles.steps} process-steps`}>
        {STEPS.map(({ num, title, desc }) => (
          <div key={num} className={`${styles.step} reveal`} data-num={num}>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p className={styles.stepDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
