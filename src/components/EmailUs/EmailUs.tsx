"use client";
import React, { useEffect, useState } from "react";
import styles from "./EmailUs.module.css";
import { FlexBox } from "../FlexBox";

const LS_KEY = "webbinghub_contact_email_send_count";
const MAX_SENDS = 2;

export default function EmailUs({
  label,
  secondStyle,
}: {
  label: string;
  secondStyle?: boolean;
}) {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [sendCount, setSendCount] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const raw = window.localStorage.getItem(LS_KEY);
    const parsed = raw ? Number(raw) : 0;

    if (Number.isFinite(parsed) && parsed >= 0) setSendCount(parsed);
    else window.localStorage.setItem(LS_KEY, "0");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (sendCount >= MAX_SENDS) {
      setMessage(
        "You’ve reached the email sending limit. If you wish to contact us, we will be happy to attend you at support@webbinghub.io.",
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
        const nextCount = sendCount + 1;
        setSendCount(nextCount);
        window.localStorage.setItem(LS_KEY, String(nextCount));

        setEmail("");
        setMessage("Email sent successfully!");
      } else {
        setMessage("Failed to send email.");
      }
    } catch {
      setMessage("An error occurred.");
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
            <>
              You’ve reached the email sending limit. <br />
              If you wish to contact us, we will be happy to attend you at
              support@webbinghub.io.
            </>
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
                I consent to WebbingHUB using my email address to contact me.
                <br />
                Privacy policy can be found{" "}
                <a
                  href="/privacy-policy"
                  style={{ color: "darkblue", textDecoration: "underline" }}
                >
                  here
                </a>
                .
              </label>
            </FlexBox>

            <button type="submit" disabled={loading}>
              Send
            </button>
          </>
        )}
      </FlexBox>
    </form>
  );
}
