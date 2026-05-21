import styles from "./ServicesSection.module.css";

const SERVICES = [
  {
    icon: "🌐",
    title: "Custom Websites",
    desc: "A website that truly represents your business — designed from scratch, fast on any device, and built to turn visitors into clients. No themes, no drag-and-drop shortcuts.",
  },
  {
    icon: "⚙️",
    title: "Internal Tools & Portals",
    desc: "Custom dashboards and management systems that help your team work more efficiently — managing bookings, clients, or operations, we build the tool that fits the job.",
  },
  {
    icon: "🛍️",
    title: "Online Stores",
    desc: "A store built for performance and sales — not just appearance. From product pages to checkout, every step is designed with conversion in mind.",
  },
  {
    icon: "🔗",
    title: "Integrations & Automations",
    desc: "WhatsApp, booking engines, QR menus, payment providers, third-party APIs — we connect your website to the tools your business already runs on.",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.services} id="services">
      <div className={`${styles.hd} reveal`}>
        <div>
          <p className={styles.label}>What we build</p>
          <h2 className={styles.heading}>
            Services designed<br />for <em>real businesses.</em>
          </h2>
        </div>
        <p className={styles.note}>
          Every engagement is tailored. We don&apos;t sell packages — we solve problems.
        </p>
      </div>

      <div className={`${styles.grid} services-grid`}>
        {SERVICES.map(({ icon, title, desc }) => (
          <div key={title} className={`${styles.card} reveal`}>
            <div className={styles.cardIcon}>{icon}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
