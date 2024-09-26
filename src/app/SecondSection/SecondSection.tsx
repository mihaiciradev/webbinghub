import React from "react";
import styles from "./SecondSection.module.css";
import { FlexBox } from "@/components/FlexBox";
import Compass from "@/components/Compass/Compass";
import Image from "next/image";
import rocket from "@/assets/rocket.svg";

export default function SecondSection() {
  return (
    <FlexBox
      sx={{ flexDirection: "column", gap: "5rem", paddingBottom: "6rem" }}
      id="websites"
    >
      <FlexBox className={styles.pageHeader}>
        <h1>any website.</h1>
        <h1>any idea.</h1>
        <h1>any business.</h1>
      </FlexBox>

      <Compass />

      <FlexBox className={styles.pageHeader}>
        <h1>carefully projected, tailored,</h1>
        <h1>launched and mantained.</h1>
      </FlexBox>

      <Image src={rocket} alt="launch" />
    </FlexBox>
  );
}
