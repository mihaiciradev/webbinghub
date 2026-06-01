import { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getTranslations } from "@/i18n/utils";
import styles from "@/app/blog/page.module.css";

const BASE = "https://webbinghub.io";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: "Blog — Web Development Insights by WebbingHUB",
    description:
      "Practical articles on web development, website costs, and growth, written by the WebbingHUB team for business owners across Europe.",
    alternates: {
      canonical: `${BASE}/${locale}/blog`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}/blog`]),
        ["x-default", `${BASE}/en/blog`],
      ]),
    },
    openGraph: {
      title: "Blog — Web Development Insights by WebbingHUB",
      description: "Practical articles on web development for business owners.",
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

export default function BlogPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale).pages.blog;

  const POSTS = [
    {
      slug: "maximize-website-visibility-google-search-console",
      title: "Maximize Your Website's Visibility: Google Search Console Guide",
      dateDisplay: "May 2026",
      dateTime: "2026-05-26",
      readTime: "8 min read",
      excerpt: "Google Search Console shows how your site performs in search. We explain impressions, clicks, and CTR, and how to turn that traffic into customers.",
      tags: ["SEO", "Google Search Console", "Website Visibility"],
    },
    {
      slug: "how-hard-is-it-to-make-a-website",
      title: "How hard is it to make a website? A Practical Breakdown",
      dateDisplay: "November 2024",
      dateTime: "2024-11-01",
      readTime: "8 min read",
      excerpt: "Building a website is as hard as what you need it to do. We explain the factors that set the complexity: scope, performance, and customization.",
      tags: ["Web development", "Guide", "For business owners"],
    },
  ];

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
        <p className={styles.postsLabel}>{POSTS.length} article{POSTS.length !== 1 ? "s" : ""}</p>
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className={styles.postCard}>
            <div className={styles.postMeta}>
              <span className={styles.postDate}>{post.dateDisplay}</span>
              <span className={styles.postDot}>·</span>
              <span className={styles.postRead}>{post.readTime}</span>
            </div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <div className={styles.postFooter}>
              <div className={styles.postTags}>
                {post.tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
              </div>
              <span className={styles.postArrow}>{t.readMore}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className={styles.cta}>
        <p className={styles.ctaText}>{t.ctaText}</p>
        <Link href={`/${locale}/contact`} className={styles.ctaLink}>{t.ctaLink}</Link>
      </section>
    </main>
    </>
  );
}
