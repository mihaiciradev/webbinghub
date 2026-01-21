"use client";
import React from "react";
import styles from "./Footer.module.css";
import footer_logo from "@/assets/footer_logo.svg";
import Image from "next/image";
import { FlexBox } from "../FlexBox";
import Link from "next/link";
import { useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <FlexBox
      className={styles.container}
      sx={{
        [theme.breakpoints.down("md")]: {
          flexDirection: "column !important",
          gap: "2rem",
          width: "100%",
          padding: "5rem 0 !important",
        },
      }}
    >
      <FlexBox
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "4px",
          width: "30%",
          [theme.breakpoints.down("md")]: {
            alignItems: "center !important",
            width: "100%",
          },
        }}
      >
        <Link href="/" className="underlinedLink">
          home
        </Link>
        <Link href="/about" className="underlinedLink">
          about
        </Link>
        <Link href="/contact" className="underlinedLink">
          contact
        </Link>
        <Link href="/privacy-policy" className="underlinedLink">
          privacy policy
        </Link>
      </FlexBox>
      <Image src={footer_logo} alt="footer_logo" />
      <FlexBox
        sx={{
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "4px",
          width: "30%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
            alignItems: "center !important",
          },
        }}
      >
        <Link
          href="https://www.linkedin.com/company/webbinghub"
          className="underlinedLink"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link href="mailto:sales@webbinghub.io" className="underlinedLink">
          sales@webbinghub.io
        </Link>
        <Link href="tel:+40736394784" className="underlinedLink">
          +40 736 394 784
        </Link>
      </FlexBox>
    </FlexBox>
  );
}
