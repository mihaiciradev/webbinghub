import { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import styles from "@/app/blog/how-hard-is-it-to-make-a-website/page.module.css";

const BASE = "https://webbinghub.io";
const POST_PATH = "/blog/how-hard-is-it-to-make-a-website";
const POST_URL = `${BASE}/en${POST_PATH}`;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: "How Hard Is It to Make a Website? A Practical Breakdown for Business Owners | WebbingHUB",
    description:
      "How difficult is building a website? Depends entirely on what you need it to do. We break down real factors that determine complexity — from scope to performance to customization — and help you understand your actual options.",
    keywords: [
      "how to make a website",
      "website difficulty",
      "DIY vs custom website",
      "website builder vs custom development",
      "building a website cost",
      "website complexity factors",
    ],
    authors: [{ name: "WebbingHUB", url: BASE }],
    creator: "WebbingHUB",
    publisher: "WebbingHUB",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: `${BASE}/${locale}${POST_PATH}`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE}/${l}${POST_PATH}`]),
        ["x-default", POST_URL],
      ]),
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${BASE}/${locale}${POST_PATH}`,
      siteName: "WebbingHUB",
      title: "How Hard Is It to Make a Website? A Practical Breakdown",
      description: "Understand what determines website complexity — scope, performance, customization, maintenance — and how to evaluate your real options.",
      images: [{ url: "/og-blog-website-difficulty.png", width: 1200, height: 630, alt: "How hard is it to make a website?" }],
      authors: ["WebbingHUB"],
      publishedTime: "2024-11-01T00:00:00Z",
      modifiedTime: "2026-05-26T00:00:00Z",
      section: "Web Development",
      tags: ["Web Development", "Website Building", "DIY vs Professional", "Website Cost"],
    },
    twitter: {
      card: "summary_large_image",
      title: "How Hard Is It to Make a Website? A Practical Breakdown",
      description: "Understand what really determines website complexity and your actual options.",
      images: ["/og-blog-website-difficulty.png"],
      creator: "@webbinghub",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${POST_URL}#article`,
  headline: "How Hard Is It to Make a Website? A Practical Breakdown for Business Owners",
  description:
    "How difficult is building a website? Entirely depends on what you need it to do. We break down the real factors that determine complexity — from scope to performance to customization — and help you understand your actual options.",
  image: {
    "@type": "ImageObject",
    url: `${BASE}/og-blog-website-difficulty.png`,
    width: 1200,
    height: 630,
  },
  datePublished: "2024-11-01T00:00:00Z",
  dateModified: "2026-05-26T00:00:00Z",
  wordCount: 2200,
  timeRequired: "PT8M",
  inLanguage: "en",
  author: {
    "@type": "Organization",
    name: "WebbingHUB",
    url: BASE,
    logo: {
      "@type": "ImageObject",
      url: `${BASE}/full_logo_gold.svg`,
      width: 250,
      height: 60,
    },
  },
  publisher: {
    "@type": "Organization",
    name: "WebbingHUB",
    url: BASE,
    logo: {
      "@type": "ImageObject",
      url: `${BASE}/full_logo_gold.svg`,
      width: 250,
      height: 60,
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  isPartOf: { "@id": `${BASE}/en/blog#webpage` },
  articleSection: "Web Development",
  keywords: "website difficulty, DIY website, custom website development, website builder, website cost factors",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/en` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/en/blog` },
      { "@type": "ListItem", position: 3, name: "How hard is it to make a website?", item: POST_URL },
    ],
  },
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
            <p>
              You&rsquo;re thinking about building a website. Or maybe you already have one that&rsquo;s not working. Either way, you want to know: <em>How hard is this actually going to be?</em>
            </p>

            <p>
              The honest answer? It depends entirely on what you need it to do. A one-page landing page is genuinely simple. A full e-commerce platform with inventory management, customer analytics, and integrations? That&rsquo;s complex. Most websites fall somewhere in between.
            </p>

            <p>
              Let&rsquo;s break down what actually determines difficulty — so you can make an informed decision about your own situation.
            </p>

            <h2>The Real Factors That Determine Website Difficulty</h2>

            <p>
              Difficulty isn&rsquo;t just about technical skills. It&rsquo;s about scope, performance needs, customization, and ongoing maintenance. Here are the factors that actually matter:
            </p>

            <h3>1. Scope: What Does Your Website Need to Do?</h3>

            <p>
              A static informational website (5 pages, basic contact form) is genuinely easy. You could build it in a week using WordPress, Wix, or Webflow with no coding experience.
            </p>

            <p>
              An e-commerce site with product catalog, shopping cart, payment processing, inventory management, and customer accounts? That's exponentially more complex. Suddenly you&rsquo;re managing databases, payment gateways, security standards, and business logic.
            </p>

            <p>
              <strong>Real example:</strong> A local plumber needs a site with service descriptions, a contact form, and some photos. That's 4–5 hours of work in a builder. An e-commerce brand selling to 20+ countries with localized pricing, tax compliance, and shipping integrations? 4–6 months of professional development.
            </p>

            <h3>2. Performance Requirements</h3>

            <p>
              A static website can be slow and nobody cares much. But a slow e-commerce site loses sales directly. Studies show users abandon sites that take more than 3 seconds to load — and that's just the baseline. A well-performing site can convert 10–15% better than a slow one.
            </p>

            <p>
              Building for performance means optimizing images, managing caching, choosing fast hosting, writing efficient code. It&rsquo;s doable but requires skill and attention. Using a website builder often means accepting whatever performance they give you.
            </p>

            <h3>3. Customization Needs</h3>

            <p>
              Do you need your website to look and work exactly like your brand vision? Or can you adapt to what a template offers?
            </p>

            <p>
              Website builders (Wix, Squarespace, Webflow) give you templates you customize within constraints. That&rsquo;s fast but limiting. If your industry has specific visual needs or your workflow is unconventional, you&rsquo;ll hit those limits quickly.
            </p>

            <p>
              Custom development means you can build anything, but it takes time and costs more.
            </p>

            <h3>4. Integration Complexity</h3>

            <p>
              Does your website need to connect to other tools? CRM, email marketing, accounting software, inventory systems, payment processors?
            </p>

            <p>
              Simple integrations (add a Stripe button, embed a form) are straightforward in any builder. Complex integrations (sync inventory in real-time, automate workflows, custom data flows) require development work.
            </p>

            <p>
              <strong>Example:</strong> A web builder can embed a form that sends to Mailchimp in 10 minutes. But if you need your website inventory to automatically sync with your warehouse system and update product availability in real-time? That&rsquo;s custom backend development.
            </p>

            <h3>5. Ongoing Maintenance & Growth</h3>

            <p>
              Building is just the start. Websites need:
            </p>

            <ul>
              <li><strong>Security updates:</strong> Plugins, frameworks, dependencies all get security patches. Some need applying manually.</li>
              <li><strong>Performance monitoring:</strong> You need to track if things slow down and fix it.</li>
              <li><strong>Content updates:</strong> Someone needs to add new products, update pages, manage blog posts.</li>
              <li><strong>Feature requests:</strong> "Can we add X?" requires development time.</li>
              <li><strong>Scaling:</strong> Your site works fine for 100 visitors/day but starts breaking at 10,000. Fixing that is complex.</li>
            </ul>

            <p>
              Website builders handle a lot of this automatically (updates, hosting, scaling). Custom development means you&rsquo;re responsible for more of it.
            </p>

            <h2>The Real Trade-Offs: Website Builder vs Custom Development</h2>

            <h3>Website Builders (Wix, Squarespace, Webflow, etc.)</h3>

            <p><strong>Best for:</strong> Simple sites, fast launches, limited budget, non-technical teams</p>

            <ul>
              <li>✅ Quick to launch (days, not months)</li>
              <li>✅ No coding required</li>
              <li>✅ Hosting, security, updates handled automatically</li>
              <li>✅ Lower upfront cost</li>
              <li>✅ Good templates to work from</li>
              <li>❌ Limited customization — you adapt to their platform</li>
              <li>❌ Harder to move your site later (vendor lock-in)</li>
              <li>❌ Limited integrations with outside tools</li>
              <li>❌ Can be slower than custom-built sites</li>
              <li>❌ Harder to scale beyond basic functionality</li>
            </ul>

            <h3>Custom Development</h3>

            <p><strong>Best for:</strong> Complex sites, unique requirements, long-term growth, technical sophistication</p>

            <ul>
              <li>✅ Build exactly what you need — no compromises</li>
              <li>✅ Better performance (when done right)</li>
              <li>✅ Easier to integrate with custom tools and workflows</li>
              <li>✅ You own the code — no vendor lock-in</li>
              <li>✅ Scales to complexity without hitting walls</li>
              <li>❌ Takes longer to build (weeks to months)</li>
              <li>❌ Higher upfront cost</li>
              <li>❌ You need a technical team or hire developers</li>
              <li>❌ You&rsquo;re responsible for updates, security, maintenance</li>
            </ul>

            <h2>What Actually Determines If a Project Goes Badly?</h2>

            <div className={styles.highlight}>
              <p>
                <strong>Here's what we see most often:</strong> Businesses build a website without being clear on what they actually need. Then:
              </p>
              <ul>
                <li>They pick a builder because it&rsquo;s cheap, then outgrow it in 18 months</li>
                <li>They hire a developer who builds something unmaintainable or doesn&rsquo;t match their workflow</li>
                <li>They launch without thinking about ongoing updates and security</li>
                <li>They optimize for how it looks, not how it performs or converts</li>
                <li>They choose a solution (tech stack, platform, approach) that locks them in</li>
              </ul>
            </div>

            <h2>How to Know Which Path Is Right for You</h2>

            <p>Answer these questions honestly:</p>

            <p>
              <strong>1. What do you actually need your website to do?</strong> (List it out. Be specific.)
            </p>

            <p>
              <strong>2. Will you need custom integrations with other tools?</strong>
            </p>

            <p>
              <strong>3. How important is performance and conversion?</strong> If a 2-second speed improvement could meaningfully impact your business, custom development is worth it.
            </p>

            <p>
              <strong>4. What&rsquo;s your timeline?</strong> If you need it live in 2 weeks, builders win. If you have 3 months, custom development is feasible.
            </p>

            <p>
              <strong>5. Do you have budget for maintenance?</strong> Builders include this. Custom sites require it.
            </p>

            <p>
              <strong>6. Will your needs change?</strong> If yes, custom development is more flexible long-term.
            </p>

            <p>
              <strong>7. How important is owning your own code?</strong> With builders, you&rsquo;re renting a platform. With custom development, it&rsquo;s yours.
            </p>

            <h2>The Real Cost of Getting It Wrong</h2>

            <p>
              Picking the wrong approach isn&rsquo;t just annoying — it has real business costs:
            </p>

            <ul>
              <li>Build on the wrong platform and spend 6 months later rebuilding because you outgrew it</li>
              <li>Launch without performance optimization and lose 15–20% of potential conversions to abandonment</li>
              <li>Hire a cheap developer who builds something unmaintainable and you&rsquo;re stuck</li>
              <li>Skip security updates and get hacked (happens constantly)</li>
              <li>Launch without proper SEO setup and stay invisible to Google</li>
            </ul>

            <h2>The Path Forward</h2>

            <p>
              Here's the honest reality: <strong>Small, simple websites are genuinely easy to build yourself.</strong> Use a website builder. You&rsquo;ll save money and launch fast.
            </p>

            <p>
              <strong>Complex websites or ones that drive real business value should be built with intention.</strong> That means clarity on requirements, choosing the right approach (not just the cheapest), professional development if needed, and thinking about long-term maintenance from day one.
            </p>

            <p>
              The difficulty of building a website isn&rsquo;t really a binary question. It&rsquo;s: &ldquo;What am I trying to accomplish, and what's the smartest way to get there?" Sometimes it's a $50/month builder. Sometimes it's a 4-month custom project with a team. Most of the time it's something in between.
            </p>

            <p>
              The businesses that win are the ones that made a conscious choice based on their actual needs — not just went with what was cheapest or what someone told them to do.
            </p>

            <div className={styles.inlineCta}>
              <p className={styles.inlineCtaTitle}>Still unsure which approach is right for you?</p>
              <p className={styles.inlineCtaSub}>If you&rsquo;re thinking about building a website and want honest advice on the best approach for your specific situation — no pressure to hire us, just clarity on what makes sense.</p>
              <Link href={`/${locale}/contact`} className={styles.ctaButton}>Let&rsquo;s talk →</Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
