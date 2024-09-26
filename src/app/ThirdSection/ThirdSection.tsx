import React from "react";
import styles from "./ThirdSection.module.css";
import { FlexBox } from "@/components/FlexBox";
import coworkers from "@/assets/coworkers.svg";
import Image from "next/image";
import cremLogo from "@/assets/crem_logo.svg";
import slider from "@/assets/cirlce_slider.svg";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

export default function ThirdSection() {
  return (
    <FlexBox className={styles.container}>
      <Image src={slider} alt="slider" className={styles.slider} />

      <h1>Your vision. Our experties.</h1>
      <Image src={coworkers} alt="team" />
      <p>
        Let’s <b>discuss</b> about your vision and needs - see if we are a
        match. Using the right tools by the right people, we can craft{" "}
        <b>QUALITY</b>.
      </p>
      <FlexBox className={styles.logoContainer}>
        <Image src={cremLogo} alt="webbinghub" />
      </FlexBox>
      <GetInTouch />
    </FlexBox>
  );
}
