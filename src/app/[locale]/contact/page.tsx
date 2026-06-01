import { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getTranslations } from "@/i18n/utils";
import styles from "@/app/contact/page.module.css";
import EmailUs from "@/components/EmailUs/EmailUs";
import ContactLinks from "@/components/ContactLinks/ContactLinks";

const BASE = "https://webbinghub.io";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: "Contact WebbingHUB — Let's Have a Chat",
    description:
      "No pressure, no pitch. Talk to WebbingHUB, a web development agency based in Romania, serving clients across Europe.",
    alternates: {
      canonical: `${BASE}/${locale}/contact`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}/contact`]),
        ["x-default", `${BASE}/en/contact`],
      ]),
    },
    openGraph: {
      title: "Contact WebbingHUB — Let's Have a Chat",
      description: "No pressure, no pitch. An honest conversation about your website.",
      url: `${BASE}/${locale}/contact`,
      images: [{ url: "/og-contact.png", width: 1200, height: 630, alt: "Contact WebbingHUB" }],
    },
  };
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE}/en/contact#webpage`,
  name: "Contact WebbingHUB",
  description: "Get in touch with WebbingHUB for custom web development.",
  url: `${BASE}/en/contact`,
  isPartOf: { "@id": `${BASE}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/en` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE}/en/contact` },
    ],
  },
};

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale).pages.contact;

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h1 className={styles.title}>
            {t.title}<br /><em>{t.titleEm}</em>
          </h1>
          <p className={styles.desc}>{t.desc}</p>

          <div className={styles.contacts}>
            <Link href="https://www.linkedin.com/company/webbinghub" target="_blank" rel="noopener noreferrer" className={styles.contactRow}>
              <span className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </span>
              <div>
                <p className={styles.contactLabel}>LinkedIn</p>
                <p className={styles.contactVal}>{t.linkedin}</p>
              </div>
            </Link>

            <ContactLinks
              emailLabel={t.emailLabel}
              phoneLabel={t.phoneLabel}
              styles={{
                contactRow: styles.contactRow,
                contactIcon: styles.contactIcon,
              }}
            />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.formBox}>
            <p className={styles.formTitle}>{t.formTitle}</p>
            <EmailUs label="Your email address" />
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
