"use client";

import React, { useEffect, useState } from "react";
import { Modal, Fade } from "@mui/material";
import styles from "./TravelPopup.module.css";
import { TRAVEL_SITE_URL } from "@/config/TRAVEL_POPUP";
import type { Translations } from "@/i18n/translations";

const SEEN_KEY = "travelPopupSeen";
const OPEN_DELAY_MS = 700;

interface TravelPopupProps {
  t: Translations["travelPopup"];
}

export default function TravelPopup({ t }: TravelPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only ask once per browser session
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      // Storage unavailable: still show the popup
    }
    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

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
