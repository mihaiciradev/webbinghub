"use client";
import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";

const LS_KEY = "webbinghub_contact_email_sends";
const MAX_SENDS = 3; // per rolling window (shared with EmailUs)
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

// Read recent send timestamps from localStorage, dropping any outside the window.
function getRecentSends(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const cutoff = Date.now() - WINDOW_MS;
    return parsed.filter(
      (t): t is number => typeof t === "number" && t > cutoff,
    );
  } catch {
    return [];
  }
}

export default function FooterEmail({ label }: { label: string }) {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [sendCount, setSendCount] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const recent = getRecentSends();
    setSendCount(recent.length);
    window.localStorage.setItem(LS_KEY, JSON.stringify(recent));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (getRecentSends().length >= MAX_SENDS) {
      setMessage(
        "You’ve reached the sending limit. Reach us anytime at hello@webbinghub.io.",
      );
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const next = [...getRecentSends(), Date.now()];
        setSendCount(next.length);
        window.localStorage.setItem(LS_KEY, JSON.stringify(next));
        setEmail("");
        setMessage("Thanks — we’ll reply within 24h.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isBlocked = sendCount >= MAX_SENDS;

  if (message || isBlocked) {
    return (
      <p className={styles.emailNote}>
        {message ||
          "You’ve reached the sending limit. Reach us anytime at hello@webbinghub.io."}
      </p>
    );
  }

  return (
    <form className={styles.emailForm} onSubmit={handleSubmit}>
      <p className={styles.emailLabel}>{label}</p>
      <div className={styles.emailRow}>
        <input
          type="email"
          aria-label="Your email address"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          className={styles.emailInput}
        />
        <button type="submit" disabled={loading} className={styles.emailBtn}>
          {loading ? "…" : "Send"}
        </button>
      </div>
      <label className={styles.emailConsent}>
        <input type="checkbox" required disabled={loading} />
        <span>
          I consent to WebbingHUB using my email to contact me.{" "}
          <a href="/privacy-policy">Privacy policy</a>.
        </span>
      </label>
    </form>
  );
}
