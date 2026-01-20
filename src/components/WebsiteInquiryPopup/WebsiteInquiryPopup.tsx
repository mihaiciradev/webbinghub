"use client";

import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import styles from "./WebsiteInquiryPopup.module.css";
import EmailUs from "../EmailUs/EmailUs";

interface WebsiteInquiryPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function WebsiteInquiryPopup({
  open,
  onClose,
}: WebsiteInquiryPopupProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="website-inquiry-title"
      aria-describedby="website-inquiry-description"
    >
      <Box className={styles.popupContainer}>
        <Typography
          id="website-inquiry-title"
          variant="h4"
          component="h2"
          className={styles.title}
        >
          Ready to Own Your Digital Future?
        </Typography>

        <Typography className={styles.subtitle}>
          Not sure if now is the right time for a website? That&apos;s exactly
          why we&apos;re here — to talk it through with zero pressure.
        </Typography>

        <Typography className={styles.benefits}>
          A custom website built by us can help you:
        </Typography>

        <ul className={styles.benefitsList}>
          <li>Stand out and look more professional instantly</li>
          <li>Attract better clients & increase leads 24/7</li>
          <li>Showcase your real value (not just a template)</li>
          <li>Own everything — no monthly lock-in or restrictions</li>
          <li>Finally turn visitors into paying customers</li>
        </ul>

        <Typography className={styles.ctaText}>
          Drop your email below — we&apos;ll get back to you within 24h to
          discuss your goals.
        </Typography>

        <EmailUs label="Let’s talk — drop your email" secondStyle={true} />

        <button className={styles.closeButton} onClick={onClose}>
          Maybe later
        </button>
      </Box>
    </Modal>
  );
}
