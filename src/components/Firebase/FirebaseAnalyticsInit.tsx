"use client";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase, ref, push, set, runTransaction } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const formatUtcPlus2 = (d = new Date()) => {
  const utcMs = d.getTime() + d.getTimezoneOffset() * 60_000;
  const plus2 = new Date(utcMs + 2 * 60 * 60_000);

  const pad = (n: number) => String(n).padStart(2, "0");
  return `${plus2.getFullYear()}-${pad(plus2.getMonth() + 1)}-${pad(
    plus2.getDate(),
  )} ${pad(plus2.getHours())}:${pad(plus2.getMinutes())}:${pad(
    plus2.getSeconds(),
  )} (UTC+2)`;
};

export default function FirebaseAnalyticsInit() {
  useEffect(() => {
    // if (window.location.host.includes("localhost")) return; // disable db in dev

    const app = initializeApp(firebaseConfig);
    isSupported().then((yes) => {
      if (yes) getAnalytics(app);
    });

    const database = getDatabase();
    const hash = window.location.hash?.replace("#", "").trim();

    if (!hash) return;

    const logRef = push(ref(database, `qr2/${hash}`));
    set(logRef, { at: formatUtcPlus2(), atMs: Date.now() })
      .then(() => console.log("Visit logged"))
      .catch((err) => console.error("Log error:", err));
  }, []);

  return null;
}
