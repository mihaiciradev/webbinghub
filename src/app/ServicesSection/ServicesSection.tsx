import styles from "./ServicesSection.module.css";

const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const ToolIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const StoreIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const SERVICES = [
  {
    num: "001",
    icon: <GlobeIcon />,
    title: "Custom Websites",
    desc: "A website that truly represents your business — designed from scratch, fast on any device, and built to turn visitors into clients. No themes, no drag-and-drop shortcuts.",
  },
  {
    num: "002",
    icon: <ToolIcon />,
    title: "Internal Tools & Portals",
    desc: "Custom dashboards and management systems that help your team work more efficiently — managing bookings, clients, or operations, we build the tool that fits the job.",
  },
  {
    num: "003",
    icon: <StoreIcon />,
    title: "Online Stores",
    desc: "A store built for performance and sales — not just appearance. From product pages to checkout, every step is designed with conversion in mind.",
  },
  {
    num: "004",
    icon: <LinkIcon />,
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
        {SERVICES.map(({ num, icon, title, desc }) => (
          <div key={title} className={`${styles.card} reveal`}>
            <div className={styles.cardTop}>
              <span className={styles.cardNum}>( {num} )</span>
              <div className={styles.cardIcon} aria-hidden="true">{icon}</div>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
