import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { FlexBox } from "@/components/FlexBox";
import chat from "./assets/chat.svg";
import linkedin from "./assets/linkedin.svg";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import Link from "next/link";
import { Metadata } from "next/types";
import EmailUs from "@/components/EmailUs/EmailUs";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <FlexBox className={styles.container}>
      <h2>Let&apos;s have a chat.</h2>
      <Image src={chat} alt="have a chat" />

      <p className={styles.description}>
        Maybe you need a website, maybe you don&apos;t. <br />
        Maybe it has to be a complex one, maybe not.
        <br /> Let&apos;s discuss and decide together what suits you best.
      </p>

      <FlexBox sx={{ flexDirection: "column", gap: "2rem" }}>
        <Link
          href="https://www.linkedin.com/company/webbinghub"
          target="_blank"
        >
          <FlexBox className={styles.contact_btn}>
            <Image src={linkedin} alt="linkedin" />
            <p>LinkedIn profile</p>
          </FlexBox>
        </Link>

        <Link href="mailto:support@webbinghub.io">
          <FlexBox className={styles.contact_btn}>
            <Image src={email} alt="email" />
            <p>support@webbinghub.io</p>
          </FlexBox>
        </Link>

        <Link href="tel:+40736394784">
          <FlexBox className={styles.contact_btn}>
            <Image src={phone} alt="phone number" />
            <p>+40736394784</p>
          </FlexBox>
        </Link>
      </FlexBox>

      <EmailUs
        label="Send us your email and we'll get in touch."
        secondStyle={true}
      />
    </FlexBox>
  );
}
