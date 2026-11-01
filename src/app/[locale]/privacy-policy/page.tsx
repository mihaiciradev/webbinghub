import type { Metadata } from "next";
import { pageAlternates } from "@/i18n/utils";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | WebbingHUB" },
  description:
    "How WEBBINGHUB S.R.L. handles email inquiries, cookies, Vercel analytics, and the Google Ads tag on webbinghub.io.",
  robots: { index: false, follow: true },
  alternates: pageAlternates("en", "/privacy-policy"),
};

// Privacy Policy — English only (other locales redirect here), re-exports the original page
export { default } from "@/app/privacy-policy/page";
