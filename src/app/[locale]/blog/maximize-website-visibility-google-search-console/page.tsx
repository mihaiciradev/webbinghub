import { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import styles from "@/app/blog/page.module.css";

const BASE = "https://webbinghub.io";
const ARTICLE_SLUG = "maximize-website-visibility-google-search-console";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title:
    "Maximize Your Website's Visibility: Google Search Console Guide | WebbingHUB",
  description:
    "Learn how Google Search Console transforms search performance. Understand impressions, clicks, CTR, and turn traffic into business growth. A practical guide for website owners.",
  keywords: [
    "Google Search Console",
    "website visibility",
    "search performance",
    "SEO tools",
    "Google rankings",
    "website traffic",
    "impressions clicks",
    "search console guide",
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
    canonical: `${BASE}/en/blog/${ARTICLE_SLUG}`,
    languages: Object.fromEntries([
      ...locales.map((l) => [l, `${BASE}/${l}/blog/${ARTICLE_SLUG}`]),
      ["x-default", `${BASE}/en/blog/${ARTICLE_SLUG}`],
    ]),
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: `${BASE}/en/blog/${ARTICLE_SLUG}`,
    siteName: "WebbingHUB",
    title: "Maximize Your Website's Visibility: Google Search Console Guide",
    description:
      "Learn how Google Search Console transforms search performance. Understand impressions, clicks, CTR, and turn traffic into business growth.",
    images: [
      {
        url: `/og-blog-search-console.png`,
        width: 1200,
        height: 630,
        alt: "Google Search Console Guide — Maximize Website Visibility",
        type: "image/png",
      },
    ],
    authors: ["WebbingHUB"],
    publishedTime: new Date("2026-05-26").toISOString(),
    modifiedTime: new Date("2026-05-26").toISOString(),
    section: "Technology",
    tags: [
      "Google Search Console",
      "SEO",
      "Website Visibility",
      "Web Development",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximize Your Website's Visibility: Google Search Console Guide",
    description:
      "Learn how to use Google Search Console to understand your search performance and drive real business growth.",
    creator: "@webbinghub",
    images: [`/og-blog-search-console.png`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${BASE}/en/blog/${ARTICLE_SLUG}#article`,
  headline:
    "Maximize Your Website's Visibility: A Practical Guide to Google Search Console",
  description:
    "Learn how Google Search Console transforms search performance. Understand impressions, clicks, CTR, and turn traffic into business growth.",
  image: {
    "@type": "ImageObject",
    url: `${BASE}/og-blog-search-console.png`,
    width: 1200,
    height: 630,
  },
  datePublished: "2026-05-26T00:00:00Z",
  dateModified: "2026-05-26T00:00:00Z",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE}/en/blog/${ARTICLE_SLUG}`,
  },
  isPartOf: { "@id": `${BASE}/en/blog#webpage` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/en` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE}/en/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Google Search Console Guide",
        item: `${BASE}/en/blog/${ARTICLE_SLUG}`,
      },
    ],
  },
  keywords:
    "Google Search Console, website visibility, search performance, SEO tools, website traffic, search rankings",
  articleSection: "Web Development & SEO",
  wordCount: 2500,
  timeRequired: "PT6M",
};

export default function BlogArticle({
  params,
}: {
  params: { locale: Locale };
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className={styles.article}>
        <div className={styles.articleHeader}>
          <div className={styles.breadcrumb}>
            <a href={`/${params.locale}`}>Home</a>
            <span>/</span>
            <a href={`/${params.locale}/blog`}>Blog</a>
            <span>/</span>
            <span>Google Search Console Guide</span>
          </div>

          <header className={styles.header}>
            <p className={styles.eyebrow}>Web Development & SEO</p>
            <h1 className={styles.title}>
              Maximize Your Website's Visibility: A Practical Guide to{" "}
              <em>Google Search Console</em>
            </h1>
            <p className={styles.subtitle}>
              Learn how Google Search Console transforms search performance.
              Understand impressions, clicks, CTR, and turn traffic into
              business growth.
            </p>
          </header>

          <div className={styles.meta}>
            <span>Published on May 26, 2026</span>
            <span className={styles.separator}>•</span>
            <span>6 min read</span>
            <span className={styles.separator}>•</span>
            <span>By WebbingHUB</span>
          </div>
        </div>

        <div className={styles.content}>
          <p>
            Your website is live. You've invested time and resources into it.
            But here's the question every business owner asks:{" "}
            <em>"Is it actually bringing in traffic from Google?"</em>
          </p>

          <p>
            The answer lies in a free tool most business owners ignore:{" "}
            <strong>Google Search Console</strong>. This tool is your direct
            line to Google, showing you exactly how your website appears in
            search results and what's actually driving people to click.
          </p>

          <section>
            <h2>Why Your Website Needs Search Console</h2>

            <p>
              Think of Google Search Console as your website's dashboard for
              search performance. Without it, you're flying blind. You don't
              know:
            </p>

            <ul>
              <li>
                Which Google search queries actually bring people to your site
              </li>
              <li>
                How many times your site appears in search results (impressions)
              </li>
              <li>How many people click through to your site (clicks)</li>
              <li>Your average ranking position for each keyword</li>
              <li>If Google can even find and index your pages</li>
              <li>
                If there are technical errors preventing your site from
                appearing in search
              </li>
            </ul>

            <p>Without this data, you're essentially guessing what works.</p>
          </section>

          <section>
            <h2>The Essential Metrics You Need to Understand</h2>

            <p>
              Google Search Console revolves around three core metrics that
              matter:
            </p>

            <h3>1. Impressions</h3>
            <p>
              An impression means someone saw your website link in a Google
              search result (or in Google Discover). If you appear in position 5
              for "custom website for restaurants" and 200 people search for
              that, you get 200 impressions — even if none of them click.
            </p>

            <p>
              <strong>Why it matters:</strong> High impressions but low clicks
              usually means your title and description need work, or you're
              ranking for the wrong keywords.
            </p>

            <h3>2. Clicks</h3>
            <p>
              A click is what happens when someone actually taps your link from
              a Google result and lands on your website. This is the real
              traffic that matters.
            </p>

            <p>
              <strong>Why it matters:</strong> Clicks show search visibility is
              converting into actual visitors. More clicks = more potential
              customers seeing your site.
            </p>

            <h3>3. Click-Through Rate (CTR)</h3>
            <p>
              CTR is simple math: (clicks ÷ impressions) × 100. If you got 100
              impressions and 5 clicks, your CTR is 5%.
            </p>

            <p>
              <strong>Why it matters:</strong> CTR shows how compelling your
              search listing is. If you rank well but nobody clicks, your
              title/description needs improvement.
            </p>

            <div className={styles.highlight}>
              <strong>Real Example:</strong> A restaurant website appears in
              1,000 Google searches per month for "Italian restaurant in [city]"
              (1,000 impressions) but only gets 40 clicks. That's a 4% CTR —
              which means 96% of people searching chose a competitor instead.
              This tells you your search listing isn't attractive enough, even
              though you rank.
            </div>
          </section>

          <section>
            <h2>Getting Started: 4 Simple Steps</h2>

            <h3>Step 1: Add Your Website to Search Console</h3>
            <p>
              Go to <strong>search.google.com/search-console</strong>, sign in
              with your Google account, and add your website as a property.
              You'll choose between:
            </p>
            <ul>
              <li>
                <strong>Domain property</strong> (recommended) — tracks all
                versions of your site (www, non-www, http, https, subdomains) in
                one place
              </li>
              <li>
                <strong>URL prefix property</strong> — tracks only the exact URL
                you specify
              </li>
            </ul>

            <h3>Step 2: Verify Ownership</h3>
            <p>Google needs proof you own the site. The easiest methods:</p>
            <ul>
              <li>
                Add an HTML tag to your site's homepage (a few lines of code)
              </li>
              <li>Upload an HTML verification file to your server</li>
              <li>Connect via Google Analytics (if you already have it)</li>
            </ul>

            <h3>Step 3: Submit Your Sitemap</h3>
            <p>
              A sitemap is a list of all your pages. It helps Google discover
              and crawl your site faster. Most website platforms (WordPress,
              Next.js, etc.) auto-generate a sitemap at{" "}
              <code>/sitemap.xml</code>. Just paste that URL into Search Console
              and submit it.
            </p>

            <h3>Step 4: Check Your Performance Report</h3>
            <p>
              After a few days, Search Console starts showing data. Look at:
            </p>
            <ul>
              <li>
                <strong>Performance Report:</strong> See which keywords bring
                traffic, your ranking positions, and CTR
              </li>
              <li>
                <strong>Coverage Report:</strong> Check if all your pages are
                indexed (or if Google found errors)
              </li>
              <li>
                <strong>Security Issues Report:</strong> Get alerted if Google
                detects hacking or malware
              </li>
            </ul>
          </section>

          <section>
            <h2>What to Do With This Data</h2>

            <p>
              Numbers alone don't drive business. Here's what{" "}
              <strong>actionable insights</strong> look like:
            </p>

            <p>
              <strong>Scenario 1:</strong> You're getting 500 impressions for a
              keyword but only 5 clicks (1% CTR). <em>Action:</em> Rewrite your
              page title and meta description to be more compelling.
            </p>

            <p>
              <strong>Scenario 2:</strong> A page you thought was important
              isn't appearing in any search results. <em>Action:</em> Google
              couldn't index it. Check the Coverage report to see the error, fix
              it, and resubmit.
            </p>

            <p>
              <strong>Scenario 3:</strong> You're ranking #8 for a high-value
              keyword. <em>Action:</em> Improve that page's content to move it
              to the top 3. Small ranking increases often drive big traffic
              increases.
            </p>
          </section>

          <section>
            <h2>Why Most Websites Underperform (Even With Search Console)</h2>

            <div className={styles.warning}>
              <h3>The Hidden Bottleneck</h3>
              <p>
                Here's what we see constantly: businesses set up Search Console,
                check it once, see the data, and then... nothing. They either
                don't know what to do with the insights, or they try fixes that
                don't work.
              </p>
              <p>
                The real problem?{" "}
                <strong>
                  Search Console success depends on what happens before it.
                </strong>
              </p>
            </div>

            <p>
              Search Console is like a dashboard for your car — it tells you if
              the engine is running efficiently. But if the engine itself was
              built poorly, no dashboard can fix it.
            </p>

            <p>Your website's performance depends on:</p>

            <ul>
              <li>
                <strong>Architecture:</strong> Is your site organized in a way
                Google can understand? Are URLs clean? Is navigation logical?
              </li>
              <li>
                <strong>Technical setup:</strong> Does your site load fast? Is
                it mobile-responsive? Are there crawl errors or indexing issues?
              </li>
              <li>
                <strong>Content quality:</strong> Are your pages actually
                answering what people search for?
              </li>
              <li>
                <strong>Trust signals:</strong> Does your site look professional
                and trustworthy to both Google and visitors?
              </li>
            </ul>

            <p>
              Most DIY or low-cost websites fail on one or more of these — which
              means Search Console data shows the problem, but you can't fix it
              without rebuilding parts of the site.
            </p>
          </section>

          <section>
            <h2>The Path Forward</h2>

            <p>
              If you already have a website, Search Console is absolutely worth
              setting up. Start collecting data today. In 30 days you'll see
              patterns; in 90 days you'll have clarity on what's working.
            </p>

            <p>
              But if you're <strong>building a new website</strong> — or
              rebuilding an old one — there's a smarter approach:{" "}
              <strong>build it right from day one</strong>, optimized for search
              from the ground up.
            </p>

            <div className={styles.inlineCta}>
              <p className={styles.inlineCtaTitle}>
                At WebbingHUB, we build custom websites with search visibility
                built in.
              </p>
              <p className={styles.inlineCtaSub}>
                That means clean architecture, fast loading, mobile
                optimization, proper indexing setup, and professional design.
                When you launch, Google can actually find and rank your site.
                Then Search Console becomes a tool for growth, not firefighting.
              </p>
              <p className={styles.inlineCtaSub}>
                We also help you understand the data — and take action on it —
                so your website actually becomes a channel that brings in leads
                and sales.
              </p>
              <a href="mailto:hello@webbinghub.io" className={styles.ctaButton}>
                Let's discuss your website →
              </a>
            </div>
          </section>

          <section>
            <h2>Key Takeaways</h2>

            <ul>
              <li>
                Google Search Console is free and shows you exactly how your
                site performs in search
              </li>
              <li>
                Impressions, clicks, and CTR are the three metrics that tell the
                full story
              </li>
              <li>
                Setup takes 15 minutes; extracting real value takes ongoing
                attention and technical expertise
              </li>
              <li>
                Most websites underperform because they were built without
                search in mind — Search Console shows the problem, but doesn't
                fix it
              </li>
              <li>
                Building a website optimized for search from day one is far
                easier than trying to fix one later
              </li>
              <li>
                Small improvements in ranking, CTR, and page quality compound
                into real business growth over time
              </li>
            </ul>
          </section>

          <div className={styles.footerNote}>
            <p>
              <strong>Ready to build a website that actually performs?</strong>{" "}
              WebbingHUB specializes in custom websites built for search
              visibility and user experience — from the architecture to the
              content. We don't just launch and hope. We build right, monitor
              results, and help you grow.{" "}
              <a href="mailto:hello@webbinghub.io">Get in touch</a> to see how
              we can help your website become a real business asset.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
