import { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { pageAlternates, brandedTitle } from "@/i18n/utils";
import styles from "@/app/blog/hotel-supplier-api-failure-booking-platform/page.module.css";

const BASE = "https://webbinghub.io";
const POST_PATH = "/blog/hotel-supplier-api-failure-booking-platform";
const POST_URL = `${BASE}/en${POST_PATH}`;
const PUBLISHED = "2026-11-11";

const SEO_TITLE = "Hotel Supplier API Failures: Timeouts, Retries and Recovery";
const DESCRIPTION =
  "Design hotel integrations that contain supplier failures, return partial search results and recover uncertain bookings without unsafe retries.";
const H1 = "One Hotel Supplier Timed Out. Why Did Your Entire Booking Platform Stop?";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: brandedTitle(SEO_TITLE),
    description: DESCRIPTION,
    keywords: [
      "hotel supplier API integration",
      "hotel booking API timeout",
      "booking API retry strategy",
      "duplicate hotel reservations API",
      "travel API resilience",
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
    alternates: pageAlternates(locale, POST_PATH),
    openGraph: {
      type: "article",
      locale: "en_US",
      url: POST_URL,
      siteName: "WebbingHUB",
      title: SEO_TITLE,
      description: DESCRIPTION,
      authors: ["WebbingHUB"],
      publishedTime: `${PUBLISHED}T00:00:00Z`,
      section: "Travel Technology",
      tags: ["hotel APIs", "supplier integrations", "resilience", "booking architecture"],
    },
    twitter: {
      card: "summary_large_image",
      title: SEO_TITLE,
      description: DESCRIPTION,
      creator: "@webbinghub",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${POST_URL}#article`,
  headline: H1,
  description: DESCRIPTION,
  datePublished: `${PUBLISHED}T00:00:00Z`,
  wordCount: 1600,
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
  articleSection: "Travel Technology",
  keywords:
    "hotel supplier API integration, hotel booking API timeout, booking API retry strategy, duplicate hotel reservations API, travel API resilience",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/en` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/en/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: "One hotel supplier timed out",
        item: POST_URL,
      },
    ],
  },
};

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
  params: { locale: Locale };
}) {
  const { locale } = params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                11 November 2026
              </time>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaRead}>8 min read</span>
            </div>
            <h1 className={styles.title}>{H1}</h1>
            <p className={styles.lead}>
              Three hotel suppliers receive the same search request. Two respond normally. The third stalls. A few seconds later, the traveler sees an error instead of results from the suppliers that were working.
            </p>
          </header>

          <div className={styles.body}>
            <p>
              That isn&apos;t only an upstream API problem. It is a <strong>hotel supplier API integration</strong> problem: one dependency was allowed to decide the outcome of the entire workflow.
            </p>
            <p>
              Search failures are frustrating. Booking failures are more serious. When a reservation request times out, the booking might already exist, even though the platform never received its confirmation. What happens next decides whether the customer gets a reliable answer or a second reservation.
            </p>
            <p>
              The useful engineering goal is not &ldquo;never experience an API error.&rdquo; It is to <strong>contain failures and preserve the correct business state when the information is incomplete</strong>.
            </p>

            <h2>Search failure and booking failure are not the same problem</h2>
            <p>
              A hotel search is a read. Depending on the product and on what the customer was promised, a platform can still be useful when one supplier is unavailable. A booking request changes the outside world: a room may be reserved, and a payment obligation may already exist.
            </p>
            <p>These operations need different policies.</p>
            <div className={styles.tableWrap}>
              <table className={styles.compare}>
                <caption className={styles.caption}>
                  A failed call is not the same event in search and in booking. These are design choices for a booking platform, not a description of one product.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Situation</th>
                    <th scope="col">Appropriate system behavior</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Cell label="Situation">One of three search suppliers times out</Cell>
                    <Cell label="Appropriate system behavior">Return valid results from the others if business rules permit, and flag incomplete coverage</Cell>
                  </tr>
                  <tr>
                    <Cell label="Situation">All search suppliers fail</Cell>
                    <Cell label="Appropriate system behavior">Explain that the availability check couldn&apos;t be completed. Do not say the hotels are sold out</Cell>
                  </tr>
                  <tr>
                    <Cell label="Situation">A search rate token expires</Cell>
                    <Cell label="Appropriate system behavior">Refresh availability or rate details under that supplier&apos;s workflow</Cell>
                  </tr>
                  <tr>
                    <Cell label="Situation">Booking response times out</Cell>
                    <Cell label="Appropriate system behavior">Mark the status uncertain. Retrieve or reconcile the prior attempt before retrying</Cell>
                  </tr>
                  <tr>
                    <Cell label="Situation">Booking definitely rejected</Cell>
                    <Cell label="Appropriate system behavior">Present the confirmed failure, with safe recovery options</Cell>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Treating every API error as &ldquo;no availability&rdquo; hides a supplier outage from operations and can mislead the traveler.
            </p>

            <h2>Stop a slow supplier from consuming the whole platform</h2>
            <p>
              A typical aggregator fans one request out to several external systems. Without isolation, a slow supplier can occupy shared worker threads, connection pools, or queues until the healthy suppliers degrade as well.
            </p>
            <p>
              A more robust design sets a deadline, a concurrency limit, and health tracking <strong>for each supplier</strong>. The service can collect the results that finished inside an overall time budget, and it can say which suppliers did not finish.
            </p>
            <p>
              The{" "}
              <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead" target="_blank" rel="noopener noreferrer">
                Microsoft bulkhead pattern
              </a>{" "}
              describes isolated resource pools, so one component&apos;s failure does not exhaust resources the others need. Its{" "}
              <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker" target="_blank" rel="noopener noreferrer">
                circuit breaker pattern
              </a>{" "}
              describes blocking calls that are likely to fail again, for a while, while still allowing a later check that the dependency has recovered. Those patterns solve different problems, and both need careful tuning. A circuit breaker protects the caller. It does not make a booking request idempotent.
            </p>
            <p>An illustrative flow:</p>
            <ul>
              <li>Supplier A responds in the allotted search window: include its valid offers.</li>
              <li>Supplier B responds normally: include its valid offers.</li>
              <li>Supplier C exceeds its deadline: record <code>supplier_unavailable</code> rather than <code>no_rooms</code>.</li>
              <li>The aggregation layer returns the available results, with a clear internal note of what finished and what coverage is missing.</li>
            </ul>
            <p>
              Whether customers should see partial results depends on what the booking product promises. That is a deliberate business decision, not an accident of whichever HTTP call finished first.
            </p>

            <figure className={styles.diagram} aria-labelledby="search-diagram-title" aria-describedby="search-diagram-desc">
              <p className={styles.kicker}>Illustrative architecture</p>
              <h3 id="search-diagram-title" className={styles.diagramTitle}>One Supplier Down, Search Still Working</h3>
              <p className={styles.request}>
                Same search request
                <span>Fanned out in parallel. Each supplier has its own deadline and concurrency limit.</span>
              </p>
              <ol className={styles.suppliers}>
                <li className={`${styles.supplier} ${styles.ok}`}>
                  <strong>Supplier A</strong>
                  <span className={styles.limit}>Own limit</span>
                  <p className={styles.outcome}>Responds in the window. Valid offers included.</p>
                </li>
                <li className={`${styles.supplier} ${styles.ok}`}>
                  <strong>Supplier B</strong>
                  <span className={styles.limit}>Own limit</span>
                  <p className={styles.outcome}>Responds normally. Valid offers included.</p>
                </li>
                <li className={`${styles.supplier} ${styles.down}`}>
                  <strong>Supplier C</strong>
                  <span className={styles.limit}>Own limit, exceeded</span>
                  <p className={styles.outcome}>Timed out. Recorded as supplier_unavailable, not as no_rooms.</p>
                </li>
              </ol>
              <div className={styles.coverage}>
                <strong>Results returned</strong>
                <p>Offers from A and B, with coverage marked incomplete because C did not answer.</p>
              </div>
              <p id="search-diagram-desc" className={styles.diagramDesc}>
                Three supplier calls run in parallel, each inside its own limit. Two return offers. One times out. Search still returns the successful results and says the coverage is incomplete.
              </p>
            </figure>

            <h2>A booking API retry strategy cannot be &ldquo;try again&rdquo;</h2>
            <p>
              <a href="https://developers.expediagroup.com/rapid/lodging/reference/error-responses" target="_blank" rel="noopener noreferrer">
                Expedia Rapid&apos;s error documentation
              </a>{" "}
              warns that a booking timeout or a 5xx response does not necessarily invalidate a reservation. The failure may happen after the booking was created. Expedia documents retrieval with the original booking reference and related identifiers, so the eventual status can be established. That behavior is Expedia&apos;s, described in Expedia&apos;s Rapid docs.
            </p>
            <p>Imagine this illustrative sequence:</p>
            <ol>
              <li>The application submits a booking request with a traceable attempt identifier.</li>
              <li>The supplier creates the reservation.</li>
              <li>The HTTP response is lost.</li>
              <li>The frontend reports a network error.</li>
              <li>The customer clicks Book again.</li>
            </ol>
            <p>
              Without a controlled recovery path, that fifth step can repeat a real transaction. Whether a repeated request is safe depends on the supplier&apos;s documented idempotency contract and on whether that supplier can retrieve status. It does not depend on a UUID the backend generated. A locally generated identifier is not a supplier-side idempotency guarantee.
            </p>
            <p>
              A timeout does not prove the booking failed. The right first action after an uncertain booking is usually to resolve the original attempt with the supplier&apos;s supported retrieval or reconciliation process, not to send the same mutation again.
            </p>

            <figure className={styles.diagram} aria-labelledby="booking-diagram-title" aria-describedby="booking-diagram-desc">
              <p className={styles.kicker}>Illustrative architecture</p>
              <h3 id="booking-diagram-title" className={styles.diagramTitle}>A Booking Exists but the Response Was Lost</h3>
              <ol className={styles.sequence}>
                <li>
                  <strong>Submit the request</strong>
                  <p>The application sends a booking attempt with a traceable identifier.</p>
                </li>
                <li>
                  <strong>The supplier creates the reservation</strong>
                  <p>The room is reserved on the supplier side. That event has already happened.</p>
                </li>
                <li className={styles.lost}>
                  <strong>The response times out</strong>
                  <p>The HTTP acknowledgment never arrives. The reservation and the response are separate events.</p>
                </li>
                <li>
                  <strong>Retrieve the existing booking</strong>
                  <p>Look up the original attempt with the supplier&apos;s retrieval or reconciliation process.</p>
                </li>
                <li>
                  <strong>Confirm the result</strong>
                  <p>The status becomes known from that lookup, instead of from a second booking mutation.</p>
                </li>
              </ol>
              <p id="booking-diagram-desc" className={styles.diagramDesc}>
                The supplier can create the reservation and still fail to return the HTTP response. Recovery retrieves the booking that already exists and confirms its result. It does not send the mutation again on the assumption that the timeout meant failure.
              </p>
            </figure>

            <h2>Make transaction state explicit</h2>
            <p>
              Consider persisting a booking attempt before the external request is sent. A simplified application-level state machine could include:
            </p>
            <p>
              <code className={styles.stateCode}>requested → submitted → pending_resolution → confirmed | failed</code>
            </p>
            <p>
              Some applications also need cancellation-pending, amendment-pending, or manual-review. These are suggested design states. They are not a claim that every supplier exposes the same status model.
            </p>
            <p>
              A state of <code>pending_resolution</code> is useful. It tells both the software and the support staff that the outcome is unknown, instead of filing the attempt as a rejected purchase.
            </p>
            <p>
              A safe process also ties retries and recovery to the original identity, checks for an existing confirmation, records what the customer approved, and keeps payment and traveler details out of the logs.
            </p>
            <p>
              <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/" target="_blank" rel="noopener noreferrer">
                AWS&apos;s guidance on making APIs idempotent
              </a>{" "}
              explains why a recognized request identifier, and atomic handling of a duplicate mutation, matter. Those properties have to live in the API contract, or inside a transaction boundary you control. They cannot be assumed for every hotel supplier.
            </p>

            <h2>Normalize supplier data without hiding supplier differences</h2>
            <p>
              A canonical booking model simplifies the platform. Normalization is not permission to discard useful differences.
            </p>
            <p>
              An adapter may convert room, board, and cancellation fields into a shared shape. It should still keep the original identifiers, the policy text, the diagnostic codes, and the correlation references, so a disputed booking can be traced to its source.
            </p>
            <p>
              One API may return a structured JSON business error. Another layer may return an HTML page from a gateway. Expedia&apos;s error reference notes that unexpected response formats can occur. A parser that assumes every error is JSON with a <code>message</code> field can crash at the moment the platform most needs to fail gently.
            </p>
            <p>
              Validate the response format defensively, classify what you do not recognize, and keep enough diagnostic provenance to investigate. Redact payment and traveler information before it reaches a log.
            </p>

            <h2>Monitor business uncertainty, not only HTTP uptime</h2>
            <p>
              A green infrastructure dashboard does not mean customers have confirmed bookings. Useful measures include:
            </p>
            <ul>
              <li>Search completion by supplier and by operation.</li>
              <li>Response latency and timeout rates inside the user&apos;s time budget.</li>
              <li>Rate and parsing failures by supplier and rate plan.</li>
              <li>Booking attempts sitting in an unresolved state, and how old they are.</li>
              <li>Reconciliation success, and the time it takes to resolve them.</li>
              <li>Duplicate-detection events and support escalations.</li>
            </ul>
            <p>
              For reads that are safe to retry, use a bounded number of retries, with backoff and jitter where that fits.{" "}
              <a href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_interaction_failure_limit_retries.html" target="_blank" rel="noopener noreferrer">
                AWS Well-Architected
              </a>{" "}
              says to control retry traffic. Unbounded retries can make an incident worse. The same &ldquo;try again&rdquo; habit does not belong on a booking mutation.
            </p>

            <h2>Resilience is what the system does after the happy path breaks</h2>
            <p>
              A booking platform does not become reliable by assuming every supplier is reliable. It becomes reliable by isolating dependencies, preserving what an offer means, telling an uncertain status apart from a confirmed failure, and giving operators a clear route to recovery.
            </p>
            <p>
              If a single supplier outage regularly takes search down, or if a booking timeout leads people to retry a mutation by hand, review <strong>failure isolation and reservation-state recovery</strong> before adding another integration.
            </p>
            <p>
              <a href="https://travel.webbinghub.io" target="_blank" rel="noopener noreferrer">
                WebbingHUB Travel
              </a>{" "}
              works in supplier connectivity and booking workflows. The useful start is one real exception the team cannot resolve.
            </p>

            <h3>Sources and further reading</h3>
            <ul className={styles.sources}>
              <li>
                <a href="https://developers.expediagroup.com/rapid/lodging/reference/error-responses" target="_blank" rel="noopener noreferrer">
                  Expedia Group — Rapid API common error responses
                </a>
                <span className={styles.sourceNote}>Supplier-specific timeout and retrieval behavior. A timeout or 5xx does not prove the reservation was never created.</span>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead" target="_blank" rel="noopener noreferrer">
                  Microsoft Azure Architecture Center — Bulkhead pattern
                </a>
                <span className={styles.sourceNote}>Resource isolation, so one component&apos;s failure does not exhaust the pools the others use.</span>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker" target="_blank" rel="noopener noreferrer">
                  Microsoft Azure Architecture Center — Circuit Breaker pattern
                </a>
                <span className={styles.sourceNote}>Protecting remote calls during repeated failure. It does not create idempotency.</span>
              </li>
              <li>
                <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/" target="_blank" rel="noopener noreferrer">
                  AWS Builders&apos; Library — Making retries safe with idempotent APIs
                </a>
                <span className={styles.sourceNote}>Transaction identity and deduplication. Those properties have to be in the API contract or in a boundary you control.</span>
              </li>
              <li>
                <a href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_interaction_failure_limit_retries.html" target="_blank" rel="noopener noreferrer">
                  AWS Well-Architected — Control and limit retry calls
                </a>
                <span className={styles.sourceNote}>Bounded retry policies. Unbounded retries can make an incident worse.</span>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}
