"use client";

import Link from "next/link";
import { trackContactConversion } from "@/lib/gtag";

interface ContactLinksProps {
  emailLabel: string;
  phoneLabel: string;
  styles: {
    contactRow: string;
    contactIcon: string;
  };
}

export default function ContactLinks({ emailLabel, phoneLabel, styles: s }: ContactLinksProps) {
  return (
    <>
      <Link href="mailto:sales@webbinghub.io" onClick={trackContactConversion} className={s.contactRow}>
        <span className={s.contactIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
          </svg>
        </span>
        <div>
          <p style={{ marginBottom: "0.25rem", fontWeight: 500 }}>{emailLabel}</p>
          <p style={{ marginTop: "0.25rem", opacity: 0.7 }}>sales@webbinghub.io</p>
        </div>
      </Link>

      <Link href="tel:+40736394784" onClick={trackContactConversion} className={s.contactRow}>
        <span className={s.contactIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </span>
        <div>
          <p style={{ marginBottom: "0.25rem", fontWeight: 500 }}>{phoneLabel}</p>
          <p style={{ marginTop: "0.25rem", opacity: 0.7 }}>+40 736 394 784</p>
        </div>
      </Link>
    </>
  );
}
