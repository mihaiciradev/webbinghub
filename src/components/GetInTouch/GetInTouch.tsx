import React from "react";
import styles from "./GetInTouch.module.css";
import { Link } from "@mui/material";
import { trackContactConversion } from "@/lib/gtag";

export default function GetInTouch({ blackFont }: { blackFont?: boolean }) {
  return (
    <Link
      href="mailto:hello@webbinghub.io"
      onClick={trackContactConversion}
      className={styles.getInTouch}
      sx={{
        color: blackFont ? "black" : "#E4D0A7",
        textDecoration: "none !important",
      }}
    >
      get in touch
    </Link>
  );
}
