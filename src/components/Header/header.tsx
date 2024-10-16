"use client";

import { useState, useEffect, ReactNode, useMemo } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import BlackLogo from "../../assets/header-black-logo.svg";
import WhiteLogo from "../../assets/header-white-logo.svg";

import { FlexBox } from "../FlexBox";
import { usePathname, useRouter } from "next/navigation";
import { Box, useTheme } from "@mui/material";
import MobileHeader from "./MobileHeader/MobileHeader";

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

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  const isHomePage = useMemo(() => {
    return pathname === "/";
  }, [pathname]);

  const theme = useTheme();

  return (
    <FlexBox
      className={`${styles.header} ${
        !isHomePage || scrolled ? styles.scrolled : ""
      }`}
      sx={{
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
          justifyContent: "center !important",
        },
      }}
    >
      <Box
        className={styles.logosContainer}
        sx={{
          [theme.breakpoints.down("md")]: {
            justifySelf: "baseline !important",
            "& img:nth-of-type(2)": {
              left: "50% !important",
              transform: "translateX(-50%)",
            },
          },
        }}
      >
        <Image src={BlackLogo} alt="webbinghub black" priority />
        <Image src={WhiteLogo} alt="webbinghub white" />
      </Box>
      <FlexBox
        sx={{
          gap: "1rem",
          [theme.breakpoints.down("md")]: {
            display: "none !important",
          },
        }}
      >
        <HeaderButton path="/">home</HeaderButton>
        <HeaderButton path="/about">about</HeaderButton>
        <HeaderButton path="/contact">contact</HeaderButton>
      </FlexBox>

      <Box
        sx={{
          display: "none",
          position: "absolute",
          top: "10px",
          right: "5%",
          [theme.breakpoints.down("md")]: {
            display:
              !isHomePage || scrolled ? "block !important" : "none !important",
          },
        }}
      >
        <MobileHeader />
      </Box>
    </FlexBox>
  );
}
