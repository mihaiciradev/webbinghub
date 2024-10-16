import React from "react";
import styles from "./VisionExpertiseSection.module.css";
import { FlexBox } from "@/components/FlexBox";
import Image from "next/image";
import cremLogo from "@/assets/crem_logo.svg";
import slider from "@/assets/cirlce_slider.svg";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Coworkers from "./Coworkers/Coworkers";
import EmailUs from "@/components/EmailUs/EmailUs";

export default function VisionExpertiseSection() {
  return (
    <FlexBox className={styles.container}>
      <Image src={slider} alt="webbing hub slider" className={styles.slider} />

      <h1>Your vision. Our expertise.</h1>
      <Coworkers />
      <p>
        Let&apos;s <b>discuss</b> about your vision and needs - see if we are a
        match. Using the right tools by the right people, we can craft{" "}
        <b>QUALITY</b>.
      </p>
      <FlexBox className={styles.logoContainer}>
        <Image src={cremLogo} alt="webbing hub websites logo" />
      </FlexBox>
      <GetInTouch />
      <EmailUs />
    </FlexBox>
  );
}
