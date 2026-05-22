import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "WebbingHUB privacy policy — how we collect, use, and protect your data.",
  robots: { index: false, follow: true },
};

// Privacy Policy — English only, re-exports the original page
export { default } from "@/app/privacy-policy/page";
