import React from "react";
import styles from "./GetInTouch.module.css";
import { Link } from "@mui/material";

export default function GetInTouch({ blackFont }: { blackFont?: boolean }) {
  return (
    <Link
      href="mailto:sales@webbinghub.io"
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
