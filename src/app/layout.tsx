// Root layout — minimal HTML shell only.
// All real layout (Header, Footer, fonts) lives in [locale]/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // No title template here: [locale]/layout.tsx owns it, otherwise the brand is appended twice
  title: "WebbingHUB | Crafting Websites That Inspire",
  description: "Websites for any vision, any business & every user.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
