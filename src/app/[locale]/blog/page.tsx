import { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/utils";
import styles from "@/app/blog/page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and guides on web development from the WebbingHUB team.",
};

export default function BlogPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale).pages.blog;

  const POSTS = [
    {
      slug: "how-hard-is-it-to-make-a-website",
      title: "How hard is it to make a website?",
      dateDisplay: "November 2024",
      dateTime: "2024-11-01",
      readTime: "6 min read",
      excerpt: "Building a website can be simple or deeply complex. We break down what it actually takes — from drag-and-drop builders to fully custom development — and when hiring professionals makes the difference.",
      tags: ["Web development", "Guide", "For business owners"],
    },
  ];

  return (
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
  );
}
