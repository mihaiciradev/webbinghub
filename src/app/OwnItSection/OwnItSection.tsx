"use client";

import React, { useState } from "react";
import { FlexBox } from "@/components/FlexBox";
import styles from "./OwnItSection.module.css";
import WebsiteInquiryPopup from "@/components/WebsiteInquiryPopup/WebsiteInquiryPopup";

export default function OwnItSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <FlexBox
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        padding: "5rem 1.5rem 6rem",
        background: "#111827",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
        gap: "2rem",
        textAlign: "center",
      }}
      id="own-it"
    >
      <div className={styles.content}>
        <h2 className={`${styles.line} ${styles.getLine}`}>
          GET YOUR WEBSITE.
        </h2>

        <h2 className={styles.line}>
          <span className={styles.own}>OWN</span>{" "}
          <span className={styles.it}>IT</span>
        </h2>

        <p className={styles.description}>
          Your brand. Your rules. Your website —{" "}
          <strong>fully owned by you</strong>.
        </p>
      </div>

      <button className={styles.cta} onClick={() => setIsPopupOpen(true)}>
        I want a website!
      </button>

      <WebsiteInquiryPopup
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </FlexBox>
  );
}
