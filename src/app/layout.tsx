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

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
});

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

let analytics;

if (typeof window !== "undefined") {
  // Only initialize analytics in the browser
  analytics = getAnalytics(app);
}

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
  alternates: {
    canonical: "https://webbinghub.com",
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
