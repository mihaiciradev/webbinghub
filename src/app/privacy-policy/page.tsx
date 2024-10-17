import React from "react";

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "5rem",
        color: "black",
      }}
    >
      <h1>Privacy Policy</h1>
      <p>Last updated: 18 october 2024</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          At WebbingHUB, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and disclose information
          when you visit our website, use our services, or communicate with us.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> When you submit your email
            through our contact form, we collect your email address to
            communicate with you.
          </li>
          <li>
            <strong>Usage Data:</strong> We use analytics tools like Vercel
            Analytics to collect information about how you use our website,
            including IP address, browser type, and pages visited.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>
            <strong>To Contact You:</strong> If you submit your email address
            through our contact form, we will use it solely to respond to your
            inquiry.
          </li>
          <li>
            <strong>To Improve Our Website:</strong> We use analytics data to
            understand how users interact with our site, which helps us improve
            our content and services.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Cookies</h2>
        <p>
          Our website uses cookies to enhance user experience. Cookies are small
          files that are stored on your device when you visit a website. We use
          the following types of cookies:
        </p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Necessary for the basic
            functionality of the site.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> We use Vercel Analytics to track
            how visitors interact with our site. These cookies are only enabled
            if you provide consent through our cookie banner.
          </li>
        </ul>
        <p>
          You can choose to accept or decline non-essential cookies via our
          cookie consent banner. For more details, please see our Cookie Policy.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>
          If you are located in the EU, you have the following rights regarding
          your personal data:
        </p>
        <ul>
          <li>Right to access your personal data.</li>
          <li>Right to request correction or deletion of your data.</li>
          <li>Right to withdraw consent at any time.</li>
        </ul>
        <p>
          If you would like to exercise these rights, please contact us at{" "}
          <a href="mailto:support@webbinghub.io">support@webbinghub.io</a>.
        </p>
      </section>

      <section>
        <h2>6. Data Security</h2>
        <p>
          We take reasonable measures to protect your data. However, please note
          that no method of transmission over the internet or method of
          electronic storage is 100% secure, and we cannot guarantee its
          absolute security.
        </p>
      </section>

      <section>
        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by updating the "Last Updated" date at the top of
          this policy.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <address>
          Email:{" "}
          <a href="mailto:support@webbinghub.io">support@webbinghub.io</a>
        </address>
      </section>
    </div>
  );
}
