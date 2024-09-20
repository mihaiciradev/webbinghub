"use client";
import React from "react";
import styles from "./Background.module.css";
import Image from "next/image";
import design from "@/assets/background/design.svg";
import cake from "@/assets/background/cake.svg";
import alien from "@/assets/background/alien.svg";
import horse from "@/assets/background/horse.svg";
import leaf from "@/assets/background/leaf.svg";
import owl from "@/assets/background/owl.svg";
import ozn from "@/assets/background/ozn.svg";
import palette from "@/assets/background/palette.svg";
import palms from "@/assets/background/palms.svg";
import pepper from "@/assets/background/pepper.svg";
import pizza from "@/assets/background/pizza.svg";
import plane from "@/assets/background/plane.svg";
import popcorn from "@/assets/background/popcorn.svg";
import rhino from "@/assets/background/rhino.svg";
import robot from "@/assets/background/robot.svg";
import { Box } from "@mui/material";

export default function Background() {
  return (
    <Box className={styles.backgroundContainer}>
      <Image src={design} className={styles.bg_design} alt="design" />
      <Image src={cake} className={styles.bg_cake} alt="cake" />
      <Image src={alien} className={styles.bg_alien} alt="alien" />
      <Image src={horse} className={styles.bg_horse} alt="horse" />
      <Image src={leaf} className={styles.bg_leaf} alt="leaf" />
      <Image src={owl} className={styles.bg_owl} alt="owl" />
      <Image src={ozn} className={styles.bg_ozn} alt="ozn" />
      <Image src={palette} className={styles.bg_palette} alt="palette" />
      <Image src={palms} className={styles.bg_palms} alt="palms" />
      <Image src={pepper} className={styles.bg_pepper} alt="pepper" />
      <Image src={pizza} className={styles.bg_pizza} alt="pizza" />
      <Image src={plane} className={styles.bg_plane} alt="plane" />
      <Image src={popcorn} className={styles.bg_popcorn} alt="popcorn" />
      <Image src={rhino} className={styles.bg_rhino} alt="rhino" />
      <Image src={robot} className={styles.bg_robot} alt="robot" />
    </Box>
  );
}
