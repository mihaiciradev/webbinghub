import { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { pageAlternates, brandedTitle } from "@/i18n/utils";
import styles from "@/app/blog/hotel-price-changed-before-booking/page.module.css";

const BASE = "https://webbinghub.io";
const POST_PATH = "/blog/hotel-price-changed-before-booking";
const POST_URL = `${BASE}/en${POST_PATH}`;
const PUBLISHED = "2026-11-05";

const SEO_TITLE = "Hotel Price Changes Before Booking: Rechecks and Recovery";
const DESCRIPTION =
  "Why hotel rates change between search and booking, and how booking engines should recheck prices, compare terms and recover safely.";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: brandedTitle(SEO_TITLE),
    description: DESCRIPTION,
    keywords: [
      "hotel API price recheck",
      "hotel booking price mismatch",
      "hotel supplier rate changes",
      "hotel API rate validation",
      "hotel room mapping",
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
      modifiedTime: `${PUBLISHED}T00:00:00Z`,
      section: "Travel Technology",
      tags: ["hotel APIs", "booking engines", "rate validation", "supplier integrations"],
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
  headline: "The Hotel Price Changed Before Booking. What Should Your Booking Engine Do?",
  description: DESCRIPTION,
  datePublished: `${PUBLISHED}T00:00:00Z`,
  dateModified: `${PUBLISHED}T00:00:00Z`,
  wordCount: 980,
  timeRequired: "PT7M",
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
    "hotel API price recheck, hotel booking price mismatch, hotel supplier rate changes, hotel API rate validation, hotel room mapping",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/en` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/en/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: "The hotel price changed before booking",
        item: POST_URL,
      },
    ],
  },
};

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
                5 November 2026
              </time>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaRead}>7 min read</span>
            </div>
            <h1 className={styles.title}>
              The hotel price changed before booking. What should your booking engine do?
            </h1>
            <p className={styles.lead}>
              A reliable hotel API price recheck is not simply a second request for a number. It protects the meaning of the offer the customer accepted: room, occupancy, board basis, cancellation policy, taxes, currency, payment terms, and availability.
            </p>
          </header>

          <div className={styles.body}>
            <p>
              An agent finds a hotel, shares a quotation, and gets approval from the traveler. Ten minutes later, the booking request comes back with a different amount, or an error. Which price is correct? More importantly, what should the booking engine do next?
            </p>

            <p>
              In{" "}
              <a href="https://amadeus.com/en/newsroom/press-releases/travel-agents-embrace-ai-rate-parity" target="_blank" rel="noopener noreferrer">
                Amadeus&apos; September 2026 research
              </a>{" "}
              of more than 750 travel sellers, 94% rated rate parity highly important; 63% said they <em>would</em> book away from a property when they perceived inconsistent pricing. Those are reported opinions about parity, <strong>not</strong> measured losses from search-to-book repricing. But they underscore how seriously travel sellers take pricing consistency.
            </p>

            <h2>A search result is not a confirmed reservation</h2>
            <p>The same hotel offer passes through several different moments:</p>
            <ol>
              <li><strong>Search:</strong> A supplier returns a rate and availability at a particular moment.</li>
              <li><strong>Quote:</strong> The agency presents an offer, often after applying its own commercial rules.</li>
              <li><strong>Validate:</strong> The selected supplier rate is checked again when the customer is ready to proceed, where the supplier workflow requires it.</li>
              <li><strong>Book:</strong> A reservation request is submitted and its actual status is established.</li>
            </ol>
            <p>
              Between these moments, inventory can move, a token can expire, or commercial terms can change. The platform should distinguish <em>an offer shown to a customer</em> from <em>an offer currently acceptable for booking</em>.
            </p>
            <p>A useful internal offer record holds more than <code>totalPrice</code>:</p>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Field</th>
                    <th scope="col">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Supplier and original rate identifiers</td>
                    <td>Reconnects the offer to its source and booking conditions</td>
                  </tr>
                  <tr>
                    <td>Hotel, room, occupancy and dates</td>
                    <td>Prevents comparisons between non-equivalent stays</td>
                  </tr>
                  <tr>
                    <td>Meal plan and cancellation terms</td>
                    <td>Can change the value of a superficially cheaper rate</td>
                  </tr>
                  <tr>
                    <td>Currency, taxes and fees</td>
                    <td>Determines what is included, excluded or payable at property</td>
                  </tr>
                  <tr>
                    <td>Booking token or link and retrieval time</td>
                    <td>Helps enforce the supplier&apos;s lifecycle</td>
                  </tr>
                  <tr>
                    <td>Current validation and booking state</td>
                    <td>Prevents expired offers being treated as confirmed products</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <figure className={styles.diagram} aria-labelledby="offer-diagram-title" aria-describedby="offer-diagram-desc">
              <h3 id="offer-diagram-title" className={styles.diagramTitle}>One Offer, Four Validation Points</h3>
              <ol className={styles.flow}>
                <li>
                  <strong>Search</strong>
                  <p>A rate and availability, at one moment.</p>
                </li>
                <li>
                  <strong>Quote</strong>
                  <p>The offer the agency actually presents.</p>
                </li>
                <li>
                  <strong>Validate</strong>
                  <p>The supplier&apos;s own price check, when its rules require one.</p>
                </li>
                <li>
                  <strong>Book</strong>
                  <p>A reservation whose status is known.</p>
                </li>
              </ol>
              <div className={styles.branch}>
                <p className={styles.branchLabel}>Off the main path</p>
                <ul className={styles.branchList}>
                  <li>
                    <strong>Changed terms</strong>
                    Show what changed. Ask for a decision before substituting a different offer.
                  </li>
                  <li>
                    <strong>Uncertain booking</strong>
                    A timeout is not a failure. Retrieve the attempt before sending another reservation.
                  </li>
                </ul>
              </div>
              <p id="offer-diagram-desc" className={styles.diagramDesc}>
                Search, quotation, supplier-specific price validation, and booking are four checks of one offer. Changed terms, and a booking whose outcome is not yet known, leave that path and are handled on their own.
              </p>
            </figure>

            <h2>Why two prices may not describe the same offer</h2>
            <p>
              Suppose two suppliers return the same property and dates. One advertises a lower total, but the other includes breakfast and free cancellation. A basic sorting algorithm declares a winner; the customer may not agree.
            </p>
            <p>
              Hotel matching and room equivalence are separate problems. Mapping two supplier hotel records to one property does not prove their room categories, occupancy conditions or board plans match. A defensible comparison can say “not comparable” rather than inventing equivalence.
            </p>
            <p>
              Taxes make the comparison harder.{" "}
              <a href="https://www.hedna.org/insights/hedna-pulse/taxes-fees/" target="_blank" rel="noopener noreferrer">
                HEDNA&apos;s August 2026 briefing
              </a>{" "}
              explores how tax type, jurisdiction, amount and remittance details can lose meaning between hotel and distribution systems. An integration should preserve that information, not flatten every charge into an unexplained total.
            </p>
            <p>
              A simple rule helps: <strong>compare the complete commercial offer, not just the number in the price column.</strong>
            </p>

            <h2>A hotel API price recheck must follow the supplier&apos;s rules</h2>
            <p>There is no universal “call <code>/recheck</code> before every booking” standard. Each supplier defines what makes an offer bookable.</p>
            <p>
              For example,{" "}
              <a href="https://developer.hotelbeds.com/documentation/hotels/booking-api/workflow/" target="_blank" rel="noopener noreferrer">
                Hotelbeds&apos; Booking API workflow
              </a>{" "}
              distinguishes <code>RECHECK</code> rates, which require CheckRate before booking, from <code>BOOKABLE</code> rates that can proceed directly under the documented workflow. That distinction belongs in the integration contract, not in a generic frontend assumption.
            </p>
            <p>
              <a href="https://developers.expediagroup.com/rapid/lodging/reference/error-responses" target="_blank" rel="noopener noreferrer">
                Expedia Rapid&apos;s error and recovery documentation
              </a>{" "}
              describes price mismatches and expired booking links separately. In a price-mismatch recovery, a fresh Price Check may be necessary to obtain the current booking link. Merely changing the displayed amount is not enough.
            </p>
            <p>
              A supplier adapter should therefore own supplier-specific rules for token expiry, price validation, availability failures, booking submissions and retrieval. The business layer can then expose consistent states to the sales team without pretending every API behaves identically.
            </p>

            <h2>When the rate changes, show what changed</h2>
            <p>Consider this <strong>illustrative</strong> scenario:</p>
            <p>
              An agency quotes a three-night, breakfast-inclusive, refundable room. During validation, it finds a slightly cheaper room-only, non-refundable rate. If the interface updates only the total, the customer may unknowingly accept a worse product.
            </p>
            <p>A safe flow checks:</p>
            <ul>
              <li>Has the amount changed, and by how much?</li>
              <li>Has cancellation flexibility changed?</li>
              <li>Is breakfast or another service still included?</li>
              <li>Are taxes, property-payable fees and payment timing unchanged?</li>
              <li>Is the original room still available?</li>
              <li>Does the customer&apos;s approval still cover the new terms?</li>
            </ul>
            <p>
              If a material term changes, the system should request an explicit decision or offer an alternative, not silently substitute it. The agency also needs a written policy for who may absorb a small rate increase and what requires customer reapproval.
            </p>

            <h2>A booking timeout is a different problem from a price mismatch</h2>
            <p>This is the dangerous edge case. A booking request times out. The user sees no confirmation. Does that mean the reservation failed?</p>
            <p>
              <strong>Not necessarily.</strong> Expedia&apos;s documentation explains that a timeout or 5xx response can occur <em>after</em> a reservation was created and advises checking the booking via the supplier&apos;s retrieval process. Sending another booking request blindly can create duplicate financial exposure where the supplier&apos;s contract does not guarantee safe idempotent retries.
            </p>
            <p>Treat the outcomes separately:</p>
            <ul>
              <li><strong>Offer rejected or price changed:</strong> validate the new offer and request approval where necessary.</li>
              <li><strong>Room unavailable:</strong> show an accurate unavailability state and alternatives.</li>
              <li><strong>Booking status unknown:</strong> retrieve and reconcile the existing attempt before considering a new reservation.</li>
              <li><strong>Booking confirmed:</strong> store the supplier confirmation and advance the customer workflow.</li>
            </ul>
            <p>In other words, a price-recheck engine and a reservation-recovery engine solve related, but different, problems.</p>

            <h2>Measure where pricing trust breaks</h2>
            <p>
              A team can improve only what it can locate. Track search-to-validation mismatch rates, validation-to-booking mismatches, expired-token errors, unresolved booking attempts, average recovery time and the share of revised offers that customers accept.
            </p>
            <p>
              Break results down by supplier and operation. A single overall error rate can hide one problematic rate type or one slow supplier. Also preserve a trace of what the customer originally accepted, using privacy-conscious logging and redaction.
            </p>

            <h2>The practical takeaway</h2>
            <p>The cheapest hotel result is not necessarily the best offer. A successful API response is not necessarily a confirmed booking. And a second price request does not guarantee commercial certainty forever.</p>
            <p>
              <strong>Reliable hotel booking software manages the entire offer lifecycle:</strong> source, comparison, validation, consent, reservation and recovery.
            </p>
            <p>
              If your team regularly investigates rate mismatches by hand, start by mapping the search-to-booking flow, identifying the supplier-specific validation requirements and examining the exceptions that customer support handles today. That often reveals the engineering work that matters most.
            </p>
            <p>
              For teams working on booking systems and supplier connections,{" "}
              <a href="https://travel.webbinghub.io" target="_blank" rel="noopener noreferrer">
                WebbingHUB Travel
              </a>{" "}
              focuses on the integration layer and the operational realities behind hotel distribution.
            </p>

            <h3>Sources and further reading</h3>
            <ul className={styles.sources}>
              <li>
                <a href="https://amadeus.com/en/newsroom/press-releases/travel-agents-embrace-ai-rate-parity" target="_blank" rel="noopener noreferrer">
                  Amadeus, Global travel sellers and rate parity (29 September 2026)
                </a>
                <span className={styles.sourceNote}>Survey attitudes, not measured booking-loss outcomes.</span>
              </li>
              <li>
                <a href="https://developer.hotelbeds.com/documentation/hotels/booking-api/workflow/" target="_blank" rel="noopener noreferrer">
                  Hotelbeds, Booking API workflow
                </a>
                <span className={styles.sourceNote}>Supplier-specific recheck logic.</span>
              </li>
              <li>
                <a href="https://developers.expediagroup.com/rapid/lodging/reference/error-responses" target="_blank" rel="noopener noreferrer">
                  Expedia Group, Rapid API common error responses
                </a>
                <span className={styles.sourceNote}>Price mismatches, links, booking status and recovery.</span>
              </li>
              <li>
                <a href="https://www.hedna.org/insights/hedna-pulse/taxes-fees/" target="_blank" rel="noopener noreferrer">
                  HEDNA, Taxes, Fees &amp; the Distribution Gap (August 2026)
                </a>
                <span className={styles.sourceNote}>Tax and fee data across distribution systems.</span>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}
