import { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import styles from "@/app/blog/how-hard-is-it-to-make-a-website/page.module.css";
import EmailUs from "@/components/EmailUs/EmailUs";

export const metadata: Metadata = {
  title: "How hard is it to make a website?",
  description: "Building a website can be simple or deeply complex. We break down what it actually takes — and when hiring professionals makes the difference.",
  alternates: { canonical: "https://webbinghub.io/en/blog/how-hard-is-it-to-make-a-website" },
  openGraph: { type: "article" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How hard is it to make a website?",
  description: "Building a website can be simple or deeply complex. We break down what it actually takes — from drag-and-drop builders to fully custom development.",
  datePublished: "2024-11-01",
  author: { "@type": "Organization", name: "WebbingHUB", url: "https://webbinghub.io" },
  publisher: { "@type": "Organization", name: "WebbingHUB", url: "https://webbinghub.io" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://webbinghub.io/en/blog/how-hard-is-it-to-make-a-website" },
};

export default function BlogPostPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <Link href={`/${locale}/blog`} className={styles.back}>← Blog</Link>
        </div>

        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.metaTag}>Web development</span>
              <span className={styles.metaDot}>·</span>
              <time dateTime="2024-11-01" className={styles.metaDate}>November 2024</time>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaRead}>6 min read</span>
            </div>
            <h1 className={styles.title}>How hard is it to make a website?</h1>
            <p className={styles.lead}>
              Building a website can be as simple or as complex as your goals and technical skills allow.
              Here&apos;s an honest breakdown of what it actually takes — and when it makes sense to bring in professionals.
            </p>
          </header>

          <div className={styles.body}>
            <h2>The spectrum of website complexity</h2>
            <p>Using platforms like WordPress or Wix, beginners can create basic websites fairly quickly. However, crafting a fully optimised, custom website with enhanced performance, design, and scalability requires advanced coding skills and a deep understanding of user experience and SEO. For businesses looking to grow and succeed online, working with professional web developers can save time, eliminate headaches, and ensure you have a high-performing website tailored to your needs.</p>

            <h2>The evolution of website creation</h2>
            <p>From Simple Builders to Full-Scale Custom Development — how the landscape has changed, and what it means for your business:</p>
            <ul>
              <li><strong>Easy-to-use platforms.</strong> About 40% of websites are built using WordPress. While these platforms make website creation accessible, they often lack the advanced customisation and optimisation that professional businesses need to stand out.</li>
              <li><strong>Custom websites perform better.</strong> A study by Clutch found that 29% of DIY projects are abandoned due to dissatisfaction with the final product. Custom websites, built by professionals, are more flexible, scalable, and optimised for long-term growth.</li>
              <li><strong>The skill gap.</strong> Creating something robust and future-proof requires professional development — HTML, CSS, and JavaScript skills that 64% of professional developers rely on for creating high-performance websites.</li>
              <li><strong>Time vs. value.</strong> A simple DIY website can be built in 3–7 hours, but a professionally developed website can take a few months. This investment ensures your website not only looks great but also converts.</li>
            </ul>

            <h2>The true cost of building a website</h2>
            <p>While basic builders may seem cost-effective at first, they come with hidden limitations — especially when your business starts to grow:</p>
            <ul>
              <li><strong>Lack of flexibility.</strong> Basic plans often restrict access to critical features like SEO tools, e-commerce functionality, or custom integrations.</li>
              <li><strong>Ongoing maintenance.</strong> Websites need regular updates, security checks, and performance improvements. At WebbingHUB, we provide maintenance services so your site stays optimised and protected.</li>
            </ul>

            <h2>Why settle for average?</h2>
            <p>Studies show that 53% of mobile users abandon websites that take more than 3 seconds to load. A professionally developed website ensures faster load times, better SEO, and a smoother user experience — helping your business stand out.</p>

            <h2>Why trust WebbingHUB?</h2>
            <p>At WebbingHUB, we specialise in crafting websites that not only look great but also convert. Whether you need a simple landing page or a complex e-commerce platform, our team works closely with you to create a website that aligns perfectly with your business goals.</p>
            <ul>
              <li><strong>Performance and speed.</strong> Faster loading times, giving your users a seamless experience and improving your SEO ranking.</li>
              <li><strong>Tailored solutions.</strong> Unlike cookie-cutter templates, we build custom solutions from the ground up.</li>
            </ul>

            <h2>Ready to elevate your business?</h2>
            <p>If you want to ensure that your website stands out, performs well, and grows with your business — leave it to the experts. At WebbingHUB, we turn your vision into a reality.</p>

            <div className={styles.inlineCta}>
              <p className={styles.inlineCtaTitle}>Need a website?</p>
              <p className={styles.inlineCtaSub}>Let&apos;s talk about what you actually need — no pressure, no pitch.</p>
              <Link href={`/${locale}/contact`} className={styles.inlineCtaBtn}>Get in touch →</Link>
            </div>

            <div className={styles.emailCapture}>
              <p className={styles.emailCaptureLabel}>Or drop your email and we&apos;ll reach out:</p>
              <EmailUs label="Your email address" />
            </div>
          </div>
        </article>

        <div className={styles.backFooter}>
          <Link href={`/${locale}/blog`} className={styles.back}>← Back to Blog</Link>
        </div>
      </main>
    </>
  );
}
