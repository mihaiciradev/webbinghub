import React from "react";
import styles from "./page.module.css";
import { FlexBox } from "@/components/FlexBox";
import code from "./assets/code.svg";
import discuss from "./assets/discuss.svg";
import lego from "./assets/lego.svg";
import rocket from "./assets/rocket.svg";
import service from "./assets/service.svg";
import settings from "./assets/settings.svg";
import conceptToLaunch from "./assets/conceptToLaunch.svg";
import profile from "./assets/profile.svg";

import Image from "next/image";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

export default function about() {
  return (
    <FlexBox className={styles.container}>
      <h2>
        a few words about Webbinghub...
        <Image src={profile} alt="webbinghub profile picture" />
      </h2>

      <p className={styles.description}>
        <b>Webbinghub</b> is the embodiment of passion and expertise, born from
        the seamless fusion of a <b>hobby</b> turned <b>profession</b>. At
        Webbinghub, we do what we know best—creating websites that{" "}
        <b>speak volumes</b>. Every project reflects our love for the craft,
        where creativity meets precision, delivering web experiences that are as{" "}
        <b>impactful</b> as they are <b>beautiful</b>.
      </p>
      <Image src={code} alt="curious" className={styles.codeImg} />

      <FlexBox className={styles.textsContainer}>
        <FlexBox>
          <h2>We don't just build websites. We build your success.</h2>
          <p>
            At WebbingHub, our approach is <b>simple</b> — understand your
            business, tailor a solution, and deliver excellence. We ensure every
            website is a reflection of your brand&apos;s{" "}
            <b>values and vision</b>.
          </p>
          <FlexBox sx={{ gap: "3rem", marginLeft: "3rem" }}>
            <Image src={discuss} alt="discuss" />
            <Image src={settings} alt="settings" />
            <Image src={rocket} alt="rocket" />
          </FlexBox>
        </FlexBox>

        <FlexBox>
          <h2>Your Partner in Digital Growth.</h2>
          <p>
            We offer more than just a website. We offer a <b>partnership</b>{" "}
            dedicated to your growth. Here&aposs what sets us apart: <br />
            &bull; <b>Tailored Solutions:</b> Custom-built websites to meet your
            unique needs.
            <br />
            &bull; <b>Ongoing Support:</b> We&aposre here for you, even after
            launch.
          </p>
          <FlexBox sx={{ gap: "3rem", marginLeft: "3rem" }}>
            <Image src={lego} alt="settings" />
            <Image src={service} alt="rocket" />
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox className={styles.conceptToLaunch}>
        <h2>From Concept to Launch: How We Work.</h2>
        <p>
          We believe in a collaborative process that ensures your website is
          perfectly aligned with your business goals
        </p>
        <Image src={conceptToLaunch} alt="from concept to launch" />
      </FlexBox>

      <GetInTouch blackFont={true} />
    </FlexBox>
  );
}
