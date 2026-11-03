"use client";

import { useState } from "react";
import styles from "./FilmSection.module.css";
import type { Translations } from "@/i18n/translations";

const VIDEO_ID = "gpa2P94G59Q";
const POSTER = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const POSTER_FALLBACK = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export default function FilmSection({ t }: { t: Translations["home"]["film"] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className={styles.film} id="film">
      <div className={styles.copy}>
        <p className={styles.label}>{t.label}</p>
        <h2 className={styles.heading}>{t.heading}</h2>
        <p className={styles.text}>{t.text}</p>
      </div>

      <div className={styles.frame}>
        {playing ? (
          <iframe
            className={styles.player}
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={t.heading}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button type="button" className={styles.poster} onClick={() => setPlaying(true)}>
            <img
              src={POSTER}
              alt=""
              onError={(event) => {
                event.currentTarget.src = POSTER_FALLBACK;
              }}
            />
            <span className={styles.play}>
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5z" />
              </svg>
              {t.play}
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
