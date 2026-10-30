import type { Metadata } from "next";
import { pageAlternates } from "@/i18n/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "WebbingHUB privacy policy — how we collect, use, and protect your data.",
  robots: { index: false, follow: true },
  alternates: pageAlternates("en", "/privacy-policy"),
};

// Privacy Policy — English only (other locales redirect here), re-exports the original page
export { default } from "@/app/privacy-policy/page";
