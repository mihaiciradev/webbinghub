"use client";

import { useState, useEffect, ReactNode } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import BlackLogo from "../../assets/header-black-logo.svg";
import WhiteLogo from "../../assets/header-white-logo.svg";

import { FlexBox } from "../FlexBox";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

interface HeaderButtonProps {
  children: ReactNode;
  path: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  children,
  path,
  ...props
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <button {...props} className={styles.headerButton} onClick={handleClick}>
      {children}
    </button>
  );
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FlexBox
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      sx={{ justifyContent: "space-between" }}
    >
      <Box className={styles.logosContainer}>
        <Image src={BlackLogo} alt="webbinghub black" />
        <Image src={WhiteLogo} alt="webbinghub white" />
      </Box>

      <FlexBox sx={{ gap: "1rem" }}>
        <HeaderButton path="/">home</HeaderButton>
        <HeaderButton path="/about">about</HeaderButton>
        <HeaderButton path="/contact">contact</HeaderButton>
      </FlexBox>
    </FlexBox>
  );
}
