"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Modal, Fade } from "@mui/material";
import styles from "./TravelPopup.module.css";
import { TRAVEL_SITE_URL } from "@/config/TRAVEL_POPUP";
import { locales } from "@/i18n/config";
import type { Translations } from "@/i18n/translations";

/** Locale root only: /en, /ro. Any extra path segment is a different page. */
function isLocaleHome(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return locales.some((locale) => path === `/${locale}`);
}

const SEEN_KEY = "travelPopupSeen";
const OPEN_DELAY_MS = 700;

interface TravelPopupProps {
  t: Translations["travelPopup"];
}

export default function TravelPopup({ t }: TravelPopupProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isLocaleHome(pathname)) {
      setOpen(false);
      return;
    }

    // #direct is for people sent here for WebbingHUB itself.
    if (window.location.hash.replace(/^#/, "").toLowerCase() === "direct") return;

    // Only ask once per browser session
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      // Storage unavailable: still show the popup
    }
    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // ignore
    }
  };

  const handleTravel = () => {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // ignore
    }
    window.location.href = TRAVEL_SITE_URL;
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      aria-labelledby="travel-popup-title"
      aria-describedby="travel-popup-description"
      slotProps={{ backdrop: { className: styles.backdrop, timeout: 500 } }}
    >
      <Fade in={open} timeout={500}>
        <div className={styles.popup}>
          <button className={styles.closeIcon} onClick={handleClose} aria-label={t.close}>
            ×
          </button>

          <span className={styles.eyebrow}>{t.eyebrow}</span>

          <h2 id="travel-popup-title" className={styles.title}>
            {t.title} <em>{t.titleEm}</em>
          </h2>

          <div className={styles.divider} />

          <p id="travel-popup-description" className={styles.body}>
            {t.body}
          </p>

          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={handleTravel}>
              {t.yes}
            </button>
            <button className={styles.btnGhost} onClick={handleClose}>
              {t.no}
            </button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
