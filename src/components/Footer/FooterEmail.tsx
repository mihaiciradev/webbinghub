"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./Footer.module.css";
import { getTranslations, localizedHref } from "@/i18n/utils";
import type { Locale } from "@/i18n/config";

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
  const locale = useParams<{ locale: Locale }>().locale;
  const t = getTranslations(locale).emailForm;
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
      setMessage(t.limit);
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
        setMessage(t.success);
      } else {
        setMessage(t.error);
      }
    } catch {
      setMessage(t.error);
    } finally {
      setLoading(false);
    }
  };

  const isBlocked = sendCount >= MAX_SENDS;

  if (message || isBlocked) {
    return (
      <p className={styles.emailNote}>
        {message || t.limit}
      </p>
    );
  }

  return (
    <form className={styles.emailForm} onSubmit={handleSubmit}>
      <p className={styles.emailLabel}>{label}</p>
      <div className={styles.emailRow}>
        <input
          type="email"
          aria-label={t.emailAria}
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          className={styles.emailInput}
        />
        <button type="submit" disabled={loading} className={styles.emailBtn}>
          {loading ? "…" : t.send}
        </button>
      </div>
      <label className={styles.emailConsent}>
        <input type="checkbox" required disabled={loading} />
        <span>
          {t.consent}{" "}
          <a href={localizedHref(locale, "/privacy-policy")}>{t.privacy}</a>.
        </span>
      </label>
    </form>
  );
}
