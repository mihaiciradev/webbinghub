import { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getTranslations, localizedHref, pageAlternates, brandedTitle } from "@/i18n/utils";
import styles from "@/app/blog/page.module.css";

const BASE = "https://webbinghub.io";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { meta } = getTranslations(locale).pages.blog;
  return {
    title: brandedTitle(meta.title),
    description: meta.description,
    alternates: pageAlternates(locale, "/blog"),
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      url: `${BASE}/${locale}/blog`,
      type: "website",
      images: [{ url: "/og-blog.png", width: 1200, height: 630, alt: "WebbingHUB Blog" }],
    },
  };
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${BASE}/en/blog#blog`,
  name: "WebbingHUB Blog",
  description: "Practical articles on web development and growth.",
  url: `${BASE}/en/blog`,
  publisher: { "@id": `${BASE}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/en` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/en/blog` },
    ],
  },
};

// Posts are written in English; titles stay in the article's language
const POSTS = [
  {
    slug: "hotel-price-changed-before-booking",
    title: "The hotel price changed before booking. What should your booking engine do?",
    dateTime: "2026-11-05",
  },
  {
    slug: "maximize-website-visibility-google-search-console",
    title: "Maximize Your Website's Visibility: Google Search Console Guide",
    dateTime: "2026-05-26",
  },
  {
    slug: "how-hard-is-it-to-make-a-website",
    title: "How hard is it to make a website? A Practical Breakdown",
    dateTime: "2024-11-01",
  },
];

export default function BlogPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale).pages.blog;

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h1 className={styles.heroTitle}>
          {t.heroTitle}<br /><em>{t.heroTitleEm}</em>
        </h1>
        <p className={styles.heroSub}>{t.heroSub}</p>
      </section>

      <section className={styles.posts}>
        <p className={styles.postsLabel}>{t.articleCount(POSTS.length)}</p>
        {POSTS.map((post) => {
          const card = t.posts[post.slug];
          return (
            <Link
              key={post.slug}
              href={localizedHref(locale, `/blog/${post.slug}`)}
              hrefLang="en"
              className={styles.postCard}
            >
              <div className={styles.postMeta}>
                <time className={styles.postDate} dateTime={post.dateTime}>{card.date}</time>
                <span className={styles.postDot}>·</span>
                <span className={styles.postRead}>{card.readTime}</span>
                {t.inEnglish && (
                  <>
                    <span className={styles.postDot}>·</span>
                    <span className={styles.postRead}>{t.inEnglish}</span>
                  </>
                )}
              </div>
              <h2 className={styles.postTitle} lang="en">{post.title}</h2>
              <p className={styles.postExcerpt}>{card.excerpt}</p>
              <div className={styles.postFooter}>
                <div className={styles.postTags}>
                  {card.tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                <span className={styles.postArrow}>{t.readMore}</span>
              </div>
            </Link>
          );
        })}
      </section>

      <section className={styles.cta}>
        <p className={styles.ctaText}>{t.ctaText}</p>
        <Link href={`/${locale}/contact`} className={styles.ctaLink}>{t.ctaLink}</Link>
      </section>
    </main>
    </>
  );
}
