"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getCookieConsentValue } from "react-cookie-consent";

const ADS_ID = "AW-17874820921";

// Fired by the cookie banner when the visitor clicks Accept
export const CONSENT_ACCEPTED_EVENT = "wh-consent-accepted";

/**
 * Google Ads tag, loaded only after the visitor accepts cookies.
 * Nothing from googletagmanager.com is requested before that.
 */
export default function AdsTag() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    if (getCookieConsentValue() === "true") {
      setGranted(true);
      return;
    }
    const onAccept = () => setGranted(true);
    window.addEventListener(CONSENT_ACCEPTED_EVENT, onAccept);
    return () => window.removeEventListener(CONSENT_ACCEPTED_EVENT, onAccept);
  }, []);

  if (!granted) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="afterInteractive" />
      <Script id="gtag-aw" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ADS_ID}');
      `}</Script>
    </>
  );
}
