import { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { pageAlternates, brandedTitle } from "@/i18n/utils";
import styles from "@/app/blog/hotel-price-changed-before-booking/page.module.css";

const BASE = "https://webbinghub.io";
const POST_PATH = "/blog/hotel-price-changed-before-booking";
const POST_URL = `${BASE}/en${POST_PATH}`;
const PUBLISHED = "2026-11-05";
const MODIFIED = "2026-11-10";

const SEO_TITLE = "Hotel Price Changes Before and After Booking";
const DESCRIPTION =
  "How WebbingHUB Travel handles a hotel price change: an equivalent cheaper rate when the agent books, then a watch for a drop until free cancellation ends.";
const H1 =
  "The hotel price changed. What the booking engine does before and after the booking.";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: brandedTitle(SEO_TITLE),
    description: DESCRIPTION,
    keywords: [
      "hotel price change",
      "equivalent hotel rate",
      "hotel price drop after booking",
      "free cancellation price watch",
      "booking engine price check",
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
      modifiedTime: `${MODIFIED}T00:00:00Z`,
      section: "Travel Technology",
      tags: ["hotel booking", "equivalent rates", "price drop", "free cancellation"],
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
  dateModified: `${MODIFIED}T00:00:00Z`,
  wordCount: 1480,
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
    "hotel price change, equivalent hotel rate, hotel price drop after booking, free cancellation price watch, booking engine price check",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/en` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/en/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: "The hotel price changed",
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
              <time dateTime={MODIFIED} className={styles.metaDate}>
                Updated 10 November 2026
              </time>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaRead}>8 min read</span>
            </div>
            <h1 className={styles.title}>{H1}</h1>
            <p className={styles.lead}>
              In WebbingHUB Travel, a hotel price is handled at two moments. When an agent presses Book, the page confirms that rate and looks for an equivalent one that costs less. After the booking is confirmed, it keeps looking until the stay can no longer be cancelled for free.
            </p>
          </header>

          <div className={styles.body}>
            <p>
              This is how this booking engine works. An agent can see the comparison, and the agent decides. The app does not switch a rate on its own, and it does not cancel a booking on its own.
            </p>

            <figure className={styles.diagram} aria-labelledby="price-diagram-title" aria-describedby="price-diagram-desc">
              <h3 id="price-diagram-title" className={styles.diagramTitle}>Two moments for the same stay</h3>
              <ol className={styles.moments}>
                <li>
                  <span className={styles.momentWhen}>At booking</span>
                  <strong>A better equivalent price</strong>
                  <p>The chosen rate is confirmed with its supplier. Other suppliers are asked about the same hotel. Only the same kind of room, the same board, the same refundability, and cancellation terms at least as good.</p>
                  <p>If one is cheaper, the agent sees it and chooses. The app does not switch by itself.</p>
                </li>
                <li>
                  <span className={styles.momentWhen}>After confirmation</span>
                  <strong>A price-drop watch</strong>
                  <p>While the booking can still be cancelled for free, the app keeps looking for the same stay at a lower price. Automatic checks search the simulators. A drop has to be strictly equivalent, and it has to beat the saving the agency set.</p>
                  <p>Watching stops when the free-cancellation window ends. After that, a switch would cost a penalty.</p>
                </li>
              </ol>
              <p id="price-diagram-desc" className={styles.diagramDesc}>
                At booking, the agent can move to a cheaper equivalent rate after it has been price-checked. After confirmation, the app watches for a drop until free cancellation ends. Both choices stay with the agent.
              </p>
            </figure>

            <h2>A better price when the agent presses Book</h2>
            <p>
              When an agent presses Book on a rate, the booking page confirms the price with that rate&apos;s supplier. At the same time it asks the other suppliers about the same hotel.
            </p>
            <p>
              It looks only for an equivalent rate. The room has to be the same kind: a double is never compared with a suite. The board has to be the same. The refundability has to be the same, and the cancellation terms have to be at least as good. A lower number with breakfast removed, or with a tighter cancellation rule, is a different offer.
            </p>
            <p>
              If one equivalent rate is cheaper, a green note appears under the confirmed price. The amounts below are an example of what that note can show.
            </p>
            <p className={styles.example}>
              <span className={styles.exampleLabel}>Example of the note</span>
              LiteAPI has the same room, also room only and refundable, for €18 less (€212.40 instead of €230.90).
            </p>
            <p>
              The agent can open a side-by-side view of what is identical and what differs: the room wording, the free-cancellation deadline, and the supplier. The choice on that view is <strong>Switch to this offer</strong> or <strong>Keep the current one</strong>.
            </p>
            <p>
              Switching confirms the new rate with its own supplier before the guest details step. Nothing is booked on a price that has not been checked. The app never switches by itself.
            </p>

            <h2>Which suppliers are asked</h2>
            <p>
              The simulators are always included in that search. Hotelbeds and LiteAPI are not. Those two suppliers are queried only when someone deliberately runs a live check. In the app, that means presenter mode with the switch on Live. An automatic check, or a visit that is not that live check, does not call them. Each search of Hotelbeds or LiteAPI is counted on the API usage page.
            </p>
            <p>
              When nothing better turns up, the page says the search happened. One such line is &ldquo;Checked 3 other suppliers: this is still the best price.&rdquo;
            </p>

            <h2>After confirmation, a watch for a lower price</h2>
            <p>
              Once a booking is confirmed, and for as long as it can still be cancelled for free, the app keeps looking for the same stay at a lower price, at the supplier on the booking and at the others.
            </p>
            <p>
              The automatic checks follow the schedule set in Admin, under Suppliers &amp; checks. They search the simulators for each watched booking. A rate counts only when it is strictly equivalent, in the same sense as at booking, and only when the saving beats a threshold the agency sets. By default that threshold is €15 and 5% of the price.
            </p>
            <p>
              Hotelbeds and LiteAPI are never part of those automatic checks. That protects their limits. A booking held with one of them shows a <strong>Check for a lower price now</strong> button. The button is available for the same deliberate live check, presenter mode with Live on. Before it runs, it says that this will be one counted search per real supplier.
            </p>
            <p>
              Each booking shows a small <strong>Price watch</strong> line: when it was last checked, the best equivalent price found, and when watching will stop. Watching always stops at the end of the free-cancellation window, because after that a switch would cost a penalty.
            </p>

            <h2>How the agency sees a drop</h2>
            <p>A drop appears in three places.</p>
            <ul>
              <li>A badge on the bookings list. One example of the badge is &ldquo;€42 cheaper.&rdquo;</li>
              <li>An entry on the alert bell, and an alert email when email is set up.</li>
              <li>A Price drop card on the booking page.</li>
            </ul>
            <p>The card sets the current booking next to the new offer. It shows:</p>
            <ul>
              <li>the two offers side by side</li>
              <li>the saving after any difference in taxes</li>
              <li>that the current booking can still be cancelled free until a given date and time, in the hotel&apos;s local time</li>
              <li>the exact steps a switch would take</li>
            </ul>
            <p>
              The figures use selling prices for the client and supplier costs for the agency. The agent can see the client&apos;s saving and how the agency&apos;s margin changes, and can pass the saving on or keep part of it, following the margin rules.
            </p>

            <h2>A guided switch, with the original room still held</h2>
            <p>
              Choosing Switch starts a guided rebook. The agent confirms every step. The order is fixed so the client is never left without a room.
            </p>
            <ol>
              <li>The new rate is price-checked.</li>
              <li>The new booking is made with the same travellers.</li>
              <li>Only after the new supplier confirms is the agent asked to cancel the original booking. The free-cancellation status is checked again just before that.</li>
            </ol>
            <p>
              If the new booking fails, nothing is cancelled and the original stands. If the cancellation fails, the app says so clearly and lists both bookings, so the agent can finish by hand. It never cancels anything automatically.
            </p>
            <p>
              Both bookings keep a timeline entry linking them. An example of that entry, including an example booking id, is &ldquo;Rebooked to WH-1102 for €42 less.&rdquo; New confirmation and voucher documents are ready for the new booking, and the agent is reminded to send them to the client.
            </p>

            <h2>What still has to be true of the offer</h2>
            <p>
              A search result is not a confirmed reservation. The figure on the results page is an offer at one moment. The booking page is where that rate&apos;s supplier confirms the price.
            </p>
            <p>
              Compare the whole offer, not just the number. A cheaper rate with a worse board, or with weaker cancellation, is not the same offer. The checks above leave that rate out.
            </p>
            <p>
              A timeout is not proof the booking failed.{" "}
              <a href="https://developers.expediagroup.com/rapid/lodging/reference/error-responses" target="_blank" rel="noopener noreferrer">
                Expedia&apos;s Rapid documentation
              </a>{" "}
              describes a timeout or a 5xx response that can occur after a reservation was created, and it advises retrieving that attempt before sending another booking. That is a supplier&apos;s booking status, separate from the price comparison in WebbingHUB Travel. A longer piece on{" "}
              <Link href={`/${locale}/blog/hotel-supplier-api-failure-booking-platform`}>
                supplier timeouts and recovery
              </Link>{" "}
              is published separately.
            </p>

            <h2>The practical takeaway</h2>
            <p>
              The rate the agent first clicked is checked with its supplier before anyone is booked. A cheaper price is shown only when the room, the board, and the cancellation still match. After confirmation, the watch ends when free cancellation ends. The agent confirms each step of a switch, and the original booking stays until the new supplier has confirmed.
            </p>
            <p>
              For teams working on booking systems and supplier connections,{" "}
              <a href="https://travel.webbinghub.io" target="_blank" rel="noopener noreferrer">
                WebbingHUB Travel
              </a>{" "}
              focuses on the integration layer and the operational realities behind hotel distribution.
            </p>

            <h3>Source</h3>
            <ul className={styles.sources}>
              <li>
                <a href="https://developers.expediagroup.com/rapid/lodging/reference/error-responses" target="_blank" rel="noopener noreferrer">
                  Expedia Group, Rapid API common error responses
                </a>
                <span className={styles.sourceNote}>A timeout or 5xx can follow a reservation that already exists. Retrieve it before booking again. This describes the supplier, not WebbingHUB Travel.</span>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}
