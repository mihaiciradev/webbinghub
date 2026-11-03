import React from "react";
import styles from "./page.module.css";

export default function PrivacyPolicy() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: 3 November 2026</p>

        <section>
          <h2>1. Who we are</h2>
          <p>
            This policy describes how the presentation site at webbinghub.io
            handles personal data. The controller is:
          </p>
          <ul className={styles.company}>
            <li>Societate: WEBBINGHUB S.R.L.</li>
            <li>Cod de identificare: RO49317150</li>
            <li>Registrul comerțului: J2023004928352</li>
            <li>Sediu social: Str. Gheorghe Lazăr, nr. 34, Timișoara</li>
            <li>
              E-mail: <a href="mailto:support@webbinghub.io">support@webbinghub.io</a>
            </li>
            <li>
              Telefon: <a href="tel:+40776394784">+40 776 394 784</a>
            </li>
            <li>
              WhatsApp: <a href="https://wa.me/40776394784">+40 776 394 784</a>
            </li>
          </ul>
          <p>
            These are the company and invoicing details for WEBBINGHUB S.R.L.
            Messages sent through the forms on this site are delivered by email
            to hello@webbinghub.io so we can reply. Requests about your personal
            data go to support@webbinghub.io.
          </p>
        </section>

        <section>
          <h2>2. Information we collect</h2>
          <ul>
            <li>
              <strong>Email address.</strong> The contact forms on this site ask
              for an email address and a confirmation that we may use it to
              contact you. We send that address to hello@webbinghub.io and use
              it to reply to the inquiry. The form does not ask for a name, and
              we do not put the address on a mailing list from this form.
            </li>
            <li>
              <strong>Form limit on your device.</strong> After you send the
              form, the browser stores the time of that submission in local
              storage so the form can be sent at most three times in 24 hours.
              That record stays on your device and does not include the email
              address.
            </li>
            <li>
              <strong>Usage and performance.</strong> Vercel Web Analytics and
              Vercel Speed Insights load on every visit. They are not switched
              on by the cookie banner. They record pages viewed, the referrer,
              browser, device, and how quickly the page loads, so we can see how
              the site is used and how it performs.
            </li>
            <li>
              <strong>Advertising tag.</strong> If you press Accept on the
              cookie banner, the page loads Google&apos;s tag for ads account
              AW-17874820921 from googletagmanager.com. That tag can store
              cookies and tell Google which page you opened. Until you accept,
              and if you decline, the tag is not added to the page.
            </li>
          </ul>
          <p>
            This site does not load a Google Analytics 4 measurement tag.
          </p>
        </section>

        <section>
          <h2>3. How we use your information</h2>
          <ul>
            <li>To reply when you send us your email address.</li>
            <li>
              To understand which pages are used and how fast they load, from
              the Vercel usage and performance data.
            </li>
            <li>
              To measure advertising, only after you accept the cookie banner.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Cookies</h2>
          <p>This site uses these cookies:</p>
          <ul>
            <li>
              <strong>CookieConsent.</strong> Set when you press Accept or
              Decline. It remembers that choice. The Google Ads tag loads only
              when this cookie records Accept.
            </li>
            <li>
              <strong>Google Ads cookies.</strong> Set by Google&apos;s tag
              after you accept. They are not set if you decline or if you have
              not chosen yet.
            </li>
            <li>
              <strong>YouTube, only if you press play.</strong> The film on the
              homepage is not loaded until you choose to play it. The player
              then comes from youtube-nocookie.com, and YouTube may set its own
              cookies from that moment.
            </li>
          </ul>
          <p>
            Vercel Web Analytics and Speed Insights run without that advertising
            tag. You can change your mind by deleting the CookieConsent cookie
            and reloading the page. The ads tag then stays off until you accept
            again.
          </p>
        </section>

        <section>
          <h2>5. Your rights</h2>
          <p>
            If you are in the European Union, you can ask to access the personal
            data we hold about you, to correct it, or to delete it, and you can
            withdraw consent at any time.
          </p>
          <p>
            Write to{" "}
            <a href="mailto:support@webbinghub.io">support@webbinghub.io</a> to
            use these rights.
          </p>
        </section>

        <section>
          <h2>6. Data security</h2>
          <p>
            We take reasonable measures to protect your data. No method of
            sending or storing data on the internet is completely secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>7. Changes to this policy</h2>
          <p>
            We may update this policy. The date at the top of the page is the
            date of the latest version.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>Questions about this policy:</p>
          <ul className={styles.company}>
            <li>Societate: WEBBINGHUB S.R.L.</li>
            <li>Cod de identificare: RO49317150</li>
            <li>Registrul comerțului: J2023004928352</li>
            <li>Sediu social: Str. Gheorghe Lazăr, nr. 34, Timișoara</li>
            <li>
              E-mail: <a href="mailto:support@webbinghub.io">support@webbinghub.io</a>
            </li>
            <li>
              Telefon: <a href="tel:+40776394784">+40 776 394 784</a>
            </li>
            <li>
              WhatsApp: <a href="https://wa.me/40776394784">+40 776 394 784</a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
