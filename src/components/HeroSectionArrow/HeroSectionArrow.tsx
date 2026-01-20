"use client";
import React from "react";
import styles from "./HeroSectionArrow.module.css";
import { Box } from "@mui/material";
import BlackArrow from "@/assets/black-arrow.svg";
import Image from "next/image";

export default function HeroSectionArrow() {
  const handleClick = () => {
    const targetElement = document.getElementById("own-it");
    if (targetElement) {
      const offset = 100;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box className={styles.blackArrow} onClick={handleClick}>
      <Image src={BlackArrow} alt="any website any idea any business" />
    </Box>
  );
}
