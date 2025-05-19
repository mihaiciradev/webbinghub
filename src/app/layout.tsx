/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header/header";
import Background from "@/components/background/Background";
import { Analytics } from "@vercel/analytics/react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Cookies from "@/components/Cookies/Cookies";
import FirebaseAnalyticsInit from "@/components/Firebase/FirebaseAnalyticsInit";

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = localFont({
  src: "./fonts/Montserrat.woff",
  variable: "--font-montserrat",
  weight: "100",
});

const poppins = localFont({
  src: "./fonts/Poppins.woff",
  variable: "--font-poppins",
  weight: "normal",
});

export const metadata: Metadata = {
  title: {
    default: "WebbingHUB | Crafting Websites That Inspire",
    template: "%s | WebbingHUB",
  },
  description: "Websites for any vision, any business & every user.",
  keywords:
    "WebbingHUB, website development, web design, digital solutions, site, digital growth",
  openGraph: {
    title: "WebbingHUB",
    description: "Websites for any vision, any business & every user.",
    url: "https://webbinghub.com",
    type: "website",
    images: "/metadata_social.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebbingHUB",
    description: "Websites for any vision, any business & every user.",
    images: "/metadata_social.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable}`}
      >
        <FirebaseAnalyticsInit />
        <Cookies />
        <Analytics />
        <Header />
        {children}
        <Footer />
        <Background />
      </body>
    </html>
  );
}
