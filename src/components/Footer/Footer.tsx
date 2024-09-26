"use client";
import React from "react";
import styles from "./Footer.module.css";
import footer_logo from "@/assets/footer_logo.svg";
import Image from "next/image";
import { FlexBox } from "../FlexBox";
import Link from "next/link";

export default function Footer() {
  return (
    <FlexBox className={styles.container}>
      <FlexBox
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "4px",
          width: "30%",
        }}
      >
        <Link href="/#" className="underlinedLink">
          home
        </Link>
        <Link href="/#" className="underlinedLink">
          about
        </Link>
        <Link href="/#" className="underlinedLink">
          contact
        </Link>
      </FlexBox>
      <Image src={footer_logo} alt="footer_logo" />
      <FlexBox
        sx={{
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "4px",
          width: "30%",
        }}
      >
        <Link href="/#" className="underlinedLink">
          LinkedIn
        </Link>
        <Link href="/#" className="underlinedLink">
          support@webbinghub.io
        </Link>
        <Link href="/#" className="underlinedLink">
          +40 736 394 784
        </Link>
      </FlexBox>
    </FlexBox>
  );
}
