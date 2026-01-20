import React from "react";
import styles from "./AnyIdeaSection.module.css";
import { FlexBox } from "@/components/FlexBox";
import Compass from "@/components/Compass/Compass";
import Image from "next/image";
import rocket from "@/assets/rocket.svg";

export default function AnyIdeaSection() {
  return (
    <FlexBox
      sx={{ flexDirection: "column", gap: "1rem", padding: "5rem 0" }}
      id="websites"
    >
      <FlexBox className={styles.pageHeader}>
        <h1>any website.</h1>
        <h1>any idea.</h1>
        <h1>any business.</h1>
      </FlexBox>

      <Compass />

      <FlexBox className={styles.pageHeader}>
        <h1>carefully projected, tailored, launched and mantained.</h1>
      </FlexBox>

      <Image
        src={rocket}
        alt="webbing hub launch"
        className={styles.rocket}
        priority={false}
      />
    </FlexBox>
  );
}
