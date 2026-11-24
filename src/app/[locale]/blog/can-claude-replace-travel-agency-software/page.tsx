import { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import type { BlogLocale } from "@/i18n/config";
import { articleLocale, articleUrl, blogPostingSchema } from "@/i18n/article";
import { pageAlternates, brandedTitle, ogLocaleTag } from "@/i18n/utils";
import styles from "@/app/blog/can-claude-replace-travel-agency-software/page.module.css";
import { ClaudeTranslation, claudeSeo } from "./translation";

const BASE = "https://webbinghub.io";
const POST_PATH = "/blog/can-claude-replace-travel-agency-software";
const PUBLISHED = "2026-11-24";
const REVIEWED = "2026-11-24";
const TRAVEL_URL = "https://travel.webbinghub.io/";

const SEO_TITLE = "Can Claude Replace Travel Agency Software? What AI Can Actually Do";
const DESCRIPTION =
  "Claude can search, and sometimes book, hotels through travel connectors. Here is what that means for agencies managing suppliers, quotes, bookings and support.";
const H1 = "Can Claude Replace Travel Agency Software?";
const KEYWORDS = [
  "AI travel agency software",
  "Claude hotel booking",
  "travel agency booking software",
  "multi-supplier hotel booking",
];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: BlogLocale };
}): Promise<Metadata> {
  const loc = articleLocale(locale);
  const translated = claudeSeo(loc);
  const title = translated?.seoTitle ?? SEO_TITLE;
  const description = translated?.description ?? DESCRIPTION;
  const url = articleUrl(loc, POST_PATH);
  return {
    title: brandedTitle(title),
    description,
    keywords: KEYWORDS,
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
    alternates: pageAlternates(loc, POST_PATH),
    openGraph: {
      type: "article",
      locale: ogLocaleTag(loc),
      url,
      siteName: "WebbingHUB",
      title,
      description,
      authors: ["WebbingHUB"],
      publishedTime: `${PUBLISHED}T00:00:00Z`,
      modifiedTime: `${REVIEWED}T00:00:00Z`,
      section: translated?.section ?? "Travel technology",
      tags: ["AI travel agency software", "Claude", "hotel booking", "travel agency software"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@webbinghub",
    },
  };
}

function Cell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <td>
      <span className={styles.cellLabel}>{label}</span>
      {children}
    </td>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: { locale: BlogLocale };
}) {
  const { locale } = params;
  if (locale === "ro" || locale === "es") return <ClaudeTranslation locale={locale} />;

  const schema = blogPostingSchema({
    locale,
    path: POST_PATH,
    headline: H1,
    description: DESCRIPTION,
    datePublished: `${PUBLISHED}T00:00:00Z`,
    dateModified: `${REVIEWED}T00:00:00Z`,
    wordCount: 1009,
    timeRequired: "PT5M",
    section: "Travel technology",
    keywords: KEYWORDS.join(", "),
    crumb: "Claude and travel agency software",
    homeName: "Home",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <Link href={`/${locale}/blog`} className={styles.back}>
            ← Blog
          </Link>
        </div>

        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.metaTag}>Travel technology</span>
              <span className={styles.metaDot}>·</span>
              <time dateTime={PUBLISHED} className={styles.metaDate}>
                24 November 2026
              </time>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaRead}>5 min read</span>
            </div>
            <h1 className={styles.title}>{H1}</h1>
            <p className={styles.lead}>
              During a demo in Bucharest, a travel-agency owner asked, “Couldn&apos;t I just do that with Claude?”
            </p>
          </header>

          <div className={styles.body}>
            <p>
              The question is reasonable. Anyone comparing <strong>AI travel agency software</strong> should ask it before buying another system. Claude can search hotels, and some connected services can book. For an agency with several contracted hotel suppliers, a purpose-built, tested operational system is often a better foundation than an unconfigured general assistant alone. A connector-equipped Claude, or an AI front end on governed tools, can provide comparable features if it is actually configured and engineered to do so. An LLM interface and operational travel infrastructure are complementary.
            </p>

            <h2>What the connectors actually list</h2>
            <p>
              Anthropic&apos;s connector pages name tools. They do not give every account the same access.
            </p>
            <p>
              The{" "}
              <a href="https://claude.com/marketplace/connectors/booking" target="_blank" rel="noopener noreferrer">
                Booking.com connector
              </a>{" "}
              lists <code>accommodations_search</code>. It finds and compares accommodations, and the listing says no sign-in is required. No booking tool is listed on this connector.
            </p>
            <p>
              The{" "}
              <a href="https://claude.com/marketplace/connectors/expedia" target="_blank" rel="noopener noreferrer">
                Expedia connector
              </a>{" "}
              lists <code>search_hotels</code>, <code>search_flights</code>, and <code>get_hotel_pdp_offers</code>. The traveler can continue to Expedia to book. The listing describes the connector as currently available for US travelers. No booking action inside Claude is listed on this connector.
            </p>
            <p>
              The{" "}
              <a href="https://claude.com/marketplace/connectors/otto-travel" target="_blank" rel="noopener noreferrer">
                Otto Travel connector
              </a>{" "}
              lists <code>search_hotels</code>, <code>get_hotel_rooms</code>, <code>book_hotel</code>, <code>get_bookings</code>, and <code>cancel_booking</code>, plus flight actions. Sign-in is required. This does not prove it uses an agency&apos;s private supplier contracts.
            </p>
            <p>
              <a href="https://nuitee.com/connect/mcp-server" target="_blank" rel="noopener noreferrer">
                Nuitée&apos;s MCP page
              </a>{" "}
              is a provider claim, not an independent benchmark: an assistant can find hotels, recheck rates, book and manage stays inside Claude, ChatGPT, or other MCP clients.
            </p>
            <p>
              Claude can already search hotel inventory through connectors, and some connected services expose booking and cancellation actions. Capability depends on the service, permissions, eligibility, and the tools that service exposes. A public retail result and an agency&apos;s contracted rate are different inventories. Which of them a connector can use depends on that service.
            </p>

            <h2>Odessia, in the past tense</h2>
            <p>
              Odessia was a traveler-facing concierge. A{" "}
              <a href="https://www.phocuswire.com/interviews/startups/hot-25-travel-startups-2027-odessia" target="_blank" rel="noopener noreferrer">
                PhocusWire profile on 9 November 2026
              </a>{" "}
              described a conversational product for flights, hotels, and experiences, and described the offers as bookable. It was not established as a multi-supplier B2B agency system.
            </p>
            <p>
              On 10 November 2026,{" "}
              <a href="https://www.phocuswire.com/news/startups/openai-acquires-ai-travel-agent-odessia" target="_blank" rel="noopener noreferrer">
                PhocusWire reported
              </a>{" "}
              that OpenAI had acquired Odessia. The terms were not disclosed. The{" "}
              <a href="https://odessia.com/" target="_blank" rel="noopener noreferrer">
                Odessia homepage
              </a>{" "}
              says OpenAI acquired the company and the standalone service is no longer available. That does not prove a commercial or technical failure.
            </p>

            <h2>The question agencies should actually ask</h2>
            <aside className={styles.hypothetical}>
              <p>
                <strong>Illustrative scenario, not a customer case or a competitor test.</strong> An agency has two supplier agreements. The same hotel appears under different IDs. A quote goes to the customer. The rate changes at confirmation. The booking response is uncertain.
              </p>
            </aside>
            <p>
              A conversation can describe each of those moments. The operation is knowing which agreement produced the rate, whether the two IDs are one hotel, which terms the quote kept, whether the final rate was rechecked, and how to read the reservation state before trying again.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.compare}>
                <caption className={styles.caption}>
                  Questions to ask of an assistant, a connector, or a booking product. Not a score.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Agency requirement</th>
                    <th scope="col">Question to ask</th>
                    <th scope="col">Evidence to request</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Cell label="Agency requirement">Contracted supply</Cell>
                    <Cell label="Question to ask">Does it use our supplier credentials, rates, and commercial permissions?</Cell>
                    <Cell label="Evidence to request">Supported provider list and how credentials are used</Cell>
                  </tr>
                  <tr>
                    <Cell label="Agency requirement">Quote-to-book</Cell>
                    <Cell label="Question to ask">Can it keep the offer terms, recheck the final rate, and handle an expired quote?</Cell>
                    <Cell label="Evidence to request">A live demo or a documented workflow</Cell>
                  </tr>
                  <tr>
                    <Cell label="Agency requirement">Ambiguous booking</Cell>
                    <Cell label="Question to ask">If a supplier times out, how do we check the reservation state before trying again?</Cell>
                    <Cell label="Evidence to request">The supplier&apos;s error and lookup documentation, and tests</Cell>
                  </tr>
                  <tr>
                    <Cell label="Agency requirement">Agency operations</Cell>
                    <Cell label="Question to ask">Who handles cancellation, records, access, and reconciliation?</Cell>
                    <Cell label="Evidence to request">A workflow explanation and what the product actually includes</Cell>
                  </tr>
                  <tr>
                    <Cell label="Agency requirement">Maintenance</Cell>
                    <Cell label="Question to ask">Who updates mappings, version changes, and regression tests?</Cell>
                    <Cell label="Evidence to request">A maintenance process and testing evidence</Cell>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              A general assistant with solid tools can meet many of these. A dedicated product can miss them if it is poorly built. This table gives neither Claude nor the product a pass or a fail.
            </p>
            <p>Three of the rows decide whether a tool can carry an agency workflow:</p>
            <ol>
              <li>Does it use our contracted suppliers, rates, and permissions?</li>
              <li>After the customer accepts, what happens when the rate changes or the booking response is uncertain?</li>
              <li>Who keeps cancellations, records, access, and the mappings current?</li>
            </ol>

            <h2>Three places the same job can live</h2>
            <ul>
              <li>
                <strong>A general assistant plus a travel connector:</strong> discovery or booking inside that provider&apos;s available tools.
              </li>
              <li>
                <strong>An agency booking workflow:</strong> the agency&apos;s own supplier access, comparable results, commercial rules, quotes, booking control, and reconciliation, when those are actually implemented.
              </li>
              <li>
                <strong>A hybrid:</strong> an AI front end calling governed travel tools.
              </li>
            </ul>

            <h2>Where a dedicated product fits</h2>
            <p>
              Omnibeds by WebbingHUB (currently presented on our site as TRAVEL by WebbingHUB) is WebbingHUB&apos;s B2B software for travel agencies, not a travel agency and not a room reseller. Agencies use their own supplier contracts. Omnibeds searches across connected suppliers, maps duplicate hotels, compares rates, prepares multi-option quotes, rechecks the price before booking, books and cancels, and keeps a light record of bookings and clients. It is an extensible booking platform, built around how an agency operates. When the business needs another module or another integration, that can be developed for the requirement.
            </p>

            <h2>The real question isn&apos;t whether AI can book a hotel</h2>
            <p>It can. And its capabilities will continue improving.</p>
            <p>
              But a travel agency doesn&apos;t make money simply by generating a hotel recommendation. It needs to turn an offer into a confirmed reservation, manage its supplier relationships, protect its margins, and serve the customer when something changes.
            </p>
            <p>That&apos;s the difference between demonstrating a capability and running a business on it.</p>
            <p>
              A dedicated booking platform isn&apos;t valuable because it has more buttons than Claude. It&apos;s valuable because its workflows, integrations, and controls are designed around how the agency actually operates.
            </p>
            <p>And AI doesn&apos;t have to compete with that. It can become a powerful part of it.</p>
            <p>
              <strong>
                The opportunity for travel agencies isn&apos;t to choose between AI and booking software. It&apos;s to combine AI&apos;s flexibility with infrastructure they can control, extend, and depend on.
              </strong>
            </p>
            <p>
              Agencies that book through more than one supplier can{" "}
              <a href={TRAVEL_URL} target="_blank" rel="noopener noreferrer">
                look at the product as it is presented today
              </a>
              .
            </p>
            <p className={styles.reviewed}>
              <time dateTime={REVIEWED}>Checked 24 November 2026.</time>{" "}
              Connector listings and product pages change.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
