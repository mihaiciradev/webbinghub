"use client";
import React, { useEffect, useState } from "react";
import styles from "./EmailUs.module.css";
import { useParams } from "next/navigation";
import { FlexBox } from "../FlexBox";
import { getTranslations, localizedHref } from "@/i18n/utils";
import type { Locale } from "@/i18n/config";

const LS_KEY = "webbinghub_contact_email_sends";
const MAX_SENDS = 3; // per rolling window
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

export default function EmailUs({
  label,
  secondStyle,
}: {
  label: string;
  secondStyle?: boolean;
}) {
  const locale = useParams<{ locale?: Locale }>()?.locale ?? "en";
  const t = getTranslations(locale).emailForm;
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [sendCount, setSendCount] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const recent = getRecentSends();
    setSendCount(recent.length);
    // Persist the pruned list so expired entries are cleaned up.
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

  return (
    <form onSubmit={handleSubmit}>
      <FlexBox
        sx={{ flexDirection: "column", gap: ".5rem", textAlign: "center" }}
        className={`${styles.container} ${loading ? styles.loading : ""} ${
          secondStyle ? styles.secondStyle : ""
        }`}
      >
        <label htmlFor="email">
          {message ? (
            message
          ) : isBlocked ? (
            t.limit
          ) : (
            label
          )}
        </label>

        {!message && !isBlocked && (
          <>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />

            <FlexBox sx={{ gap: ".5rem" }}>
              <input type="checkbox" id="consent" required disabled={loading} />
              <label htmlFor="consent">
                {t.consent}{" "}
                <a
                  href={localizedHref(locale, "/privacy-policy")}
                  style={{ color: "darkblue", textDecoration: "underline" }}
                >
                  {t.privacy}
                </a>
                .
              </label>
            </FlexBox>

            <button type="submit" disabled={loading}>
              {t.send}
            </button>
          </>
        )}
      </FlexBox>
    </form>
  );
}
