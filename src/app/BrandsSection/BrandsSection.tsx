import styles from "./BrandsSection.module.css";

export default function BrandsSection() {
  return (
    <section className={styles.brands}>
      <div className={`${styles.hd} reveal`}>
        <div>
          <p className={styles.label}>Our specialisations</p>
          <h2 className={styles.heading}>
            Industry-focused <em>solutions.</em>
          </h2>
        </div>
      </div>

      <div className={`${styles.grid} brands-grid`}>
        {/* Travel card */}
        <div className={`${styles.card} reveal`}>
          <div className={styles.cardBar} />
          <div className={styles.cardBody}>
            <span className={`${styles.pill} ${styles.pillLive}`}>
              <span className={styles.pillDot} /> Live now
            </span>
            <p className={styles.cardName}>TRAVEL</p>
            <p className={styles.cardByline}>by WebbingHUB</p>
            <p className={styles.cardSub}>for hotels &amp; travel agencies</p>
            <p className={styles.cardDesc}>
              A dedicated sub-brand focused on the travel and hospitality industry.
              Booking engines, agent management portals, WhatsApp integrations, and
              digital experiences built for hotels, resorts, and travel agencies.
            </p>
            <div className={styles.tags}>
              {["Booking engines", "Agent portals", "WhatsApp", "API integrations"].map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <a href="https://travel.webbinghub.io/" className={styles.link} target="_blank" rel="noopener noreferrer">
              Visit travel.webbinghub.io →
            </a>
          </div>
        </div>

        {/* HORECA card */}
        <div className={`${styles.card} ${styles.cardMuted} reveal`}>
          <div className={`${styles.cardBar} ${styles.cardBarMuted}`} />
          <div className={styles.cardBody}>
            <span className={`${styles.pill} ${styles.pillSoon}`}>
              <span className={styles.pillDot} /> Coming soon
            </span>
            <p className={styles.cardName}>HORECA</p>
            <p className={styles.cardByline}>by WebbingHUB</p>
            <p className={styles.cardSub}>for restaurants &amp; hospitality</p>
            <p className={styles.cardDesc}>
              Dedicated digital tools for restaurants, bars, and hospitality venues.
              QR menus, reservation systems, delivery integrations, and guest-facing
              experiences designed for the pace of hospitality.
            </p>
            <div className={styles.tags}>
              {["QR menus", "Reservations", "Delivery", "Guest experience"].map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
