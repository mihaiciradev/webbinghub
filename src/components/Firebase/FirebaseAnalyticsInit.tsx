"use client";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { get } from "firebase/database";

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

export default function FirebaseAnalyticsInit() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    isSupported().then((yes) => {
      if (yes) getAnalytics(app);
    });

    const database = getDatabase();
    const hash = window.location.hash?.replace("#", "");

    if (hash && hash.length > 0) {
      const dbRef = ref(database, `qr/${hash}`);

      get(dbRef)
        .then((snapshot) => {
          const existing = snapshot.exists() ? snapshot.val() : 0;
          return set(dbRef, existing + 1);
        })
        .then(() => {
          console.log("Visit logged");
        })
        .catch((err) => {
          console.error("DB error:", err);
        });
    }
  }, []);

  return null;
}
