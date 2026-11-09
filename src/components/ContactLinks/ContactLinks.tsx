"use client";

import Link from "next/link";
import { trackContactConversion } from "@/lib/gtag";

interface ContactLinksProps {
  emailLabel: string;
  phoneLabel: string;
  whatsappLabel?: string;
  youtubeLabel: string;
  styles: {
    contactRow: string;
    contactIcon: string;
  };
}

export default function ContactLinks({
  emailLabel,
  phoneLabel,
  whatsappLabel,
  youtubeLabel,
  styles: s,
}: ContactLinksProps) {
  return (
    <>
      <Link
        href="mailto:hello@webbinghub.io"
        onClick={trackContactConversion}
        className={s.contactRow}
      >
        <span className={s.contactIcon}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b8975a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </span>
        <div>
          <p style={{ marginBottom: "0.25rem", fontWeight: 500 }}>
            {emailLabel}
          </p>
          <p style={{ marginTop: "0.25rem", opacity: 0.7 }}>
            hello@webbinghub.io
          </p>
        </div>
      </Link>

      <Link
        href="tel:+40776394784"
        onClick={trackContactConversion}
        className={s.contactRow}
      >
        <span className={s.contactIcon}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b8975a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        <div>
          <p style={{ marginBottom: "0.25rem", fontWeight: 500 }}>
            {phoneLabel}
          </p>
          <p style={{ marginTop: "0.25rem", opacity: 0.7 }}>+40 776 394 784</p>
        </div>
      </Link>

      {whatsappLabel && (
        <Link
          href="https://wa.me/40776394784"
          onClick={trackContactConversion}
          target="_blank"
          rel="noopener noreferrer"
          className={s.contactRow}
        >
          <span className={s.contactIcon}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b8975a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <circle cx="9" cy="10" r="1" />
              <circle cx="12" cy="10" r="1" />
              <circle cx="15" cy="10" r="1" />
            </svg>
          </span>
          <div>
            <p style={{ marginBottom: "0.25rem", fontWeight: 500 }}>
              {whatsappLabel}
            </p>
            <p style={{ marginTop: "0.25rem", opacity: 0.7 }}>
              +40 776 394 784
            </p>
          </div>
        </Link>
      )}

      <Link
        href="https://www.youtube.com/@WEBBINGHUB"
        onClick={trackContactConversion}
        target="_blank"
        rel="noopener noreferrer"
        className={s.contactRow}
      >
        <span className={s.contactIcon}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b8975a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22.5 7.2a2.7 2.7 0 0 0-1.9-1.9C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 7.2 28 28 0 0 0 1 12a28 28 0 0 0 .5 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 23 12a28 28 0 0 0-.5-4.8z" />
            <polygon points="10 15.2 15.2 12 10 8.8" />
          </svg>
        </span>
        <div>
          <p style={{ marginBottom: "0.25rem", fontWeight: 500 }}>
            {youtubeLabel}
          </p>
          <p style={{ marginTop: "0.25rem", opacity: 0.7 }}>@WEBBINGHUB</p>
        </div>
      </Link>
    </>
  );
}
