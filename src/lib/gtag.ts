/**
 * Google Ads Conversion Tracking
 * Tracks contact form submissions and link clicks
 */

// Declare gtag type for TypeScript
declare global {
  interface Window {
    dataLayer: Array<unknown>;
    gtag: (...args: unknown[]) => void;
  }
}

const CONVERSION_ID = "AW-17874820921";
const CONVERSION_LABEL = "Lr_xCIeJmLMcELm-sMtC";
const CONVERSION_VALUE = 30.0;
const CONVERSION_CURRENCY = "EUR";

export function trackContactConversion(): void {
  // Guard against SSR and ensure gtag is loaded
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  try {
    window.gtag("event", "conversion", {
      send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
      value: CONVERSION_VALUE,
      currency: CONVERSION_CURRENCY,
    });
  } catch (error) {
    // Silently fail if gtag is not ready
    console.debug("Conversion tracking error:", error);
  }
}
