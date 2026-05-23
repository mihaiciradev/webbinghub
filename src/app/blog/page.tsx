import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and honest takes on web development from the WebbingHUB team. We write what we know.",
  alternates: { canonical: "https://webbinghub.io/blog" },
  openGraph: {
    title: "Blog | WebbingHUB",
    description: "Insights and guides on web development from the WebbingHUB team.",
    url: "https://webbinghub.io/blog",
  },
};

const POSTS = [
  {
    slug: "how-hard-is-it-to-make-a-website",
    title: "How hard is it to make a website?",
    date: "2024-11-01",
    dateDisplay: "November 2024",
    readTime: "6 min read",
    excerpt:
      "Building a website can be simple or deeply complex depending on your goals. We break down what it actually takes — from drag-and-drop builders to fully custom development — and when hiring professionals makes the difference.",
    tags: ["Web development", "Guide", "For business owners"],
  },
];

export default function BlogPage() {
  return (
    <main className={styles.main}>

      {/* ── Hero ─────────────────────────────────── */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>From the team</p>
        <h1 className={styles.heroTitle}>
          We try to contribute.<br />
          <em>Because we care.</em>
        </h1>
        <p className={styles.heroSub}>
          The web moves fast. We write about what we learn, what we build, and
          what we think businesses should know before they make decisions about
          their online presence. No fluff — just useful stuff.
        </p>
      </section>

      {/* ── Posts ────────────────────────────────── */}
      <section className={styles.posts}>
        <p className={styles.postsLabel}>{POSTS.length} article{POSTS.length !== 1 ? "s" : ""}</p>

        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={styles.postCard}
          >
            <div className={styles.postMeta}>
              <span className={styles.postDate}>{post.dateDisplay}</span>
              <span className={styles.postDot}>·</span>
              <span className={styles.postRead}>{post.readTime}</span>
            </div>

            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>

            <div className={styles.postFooter}>
              <div className={styles.postTags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <span className={styles.postArrow}>Read →</span>
            </div>
          </Link>
        ))}
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className={styles.cta}>
        <p className={styles.ctaText}>
          Have a topic you&apos;d like us to write about?
        </p>
        <Link href="/contact" className={styles.ctaLink}>
          Let us know →
        </Link>
      </section>

    </main>
  );
}
