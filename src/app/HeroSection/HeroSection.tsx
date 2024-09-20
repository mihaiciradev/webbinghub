import { Box } from "@mui/material";
import styles from "./HeroSection.module.css";
import React from "react";
import BlackArrow from "@/assets/black-arrow.svg";
import { FlexBox } from "../../components/FlexBox";
import Image from "next/image";

export default function HeroSection() {
  return (
    <FlexBox
      className={styles.heroSectionContainer}
      sx={{
        padding: "10rem 0",
      }}
      id="websites"
    >
      <FlexBox
        sx={{
          width: "100%",
        }}
      >
        <Box className={styles.horizontalLine} />
        <FlexBox
          sx={{ flexDirection: "column" }}
          className={styles.heroTextContainer}
        >
          <h4>crafting</h4>
          <Box className={styles.websitesText}>
            <svg
              width="492.501"
              height="73.702"
              viewBox="0 0 492.501 73.702"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="svgGroup"
                stroke-linecap="round"
                fill-rule="nonzero"
                font-size="9pt"
                stroke="#000"
                stroke-width="1"
                fill="black"
              >
                <path
                  d="M 82.9 72.5 L 58.6 72.5 L 49.7 30.6 L 49.3 30.6 L 40.4 72.5 L 16.1 72.5 L 0 3.7 L 23 3.7 L 30.9 42.7 L 31.3 42.7 L 39.1 3.7 L 60.9 3.7 L 69.2 42.7 L 69.6 42.7 L 77 3.7 L 99 3.7 L 82.9 72.5 Z M 285.7 35.5 L 267.2 35.5 A 4.998 4.998 0 0 0 266.92 33.78 Q 266.429 32.431 265.074 31.646 A 5.747 5.747 0 0 0 264.6 31.4 Q 262.8 30.4 260.1 30.4 Q 255.927 30.4 254.173 31.542 A 2.567 2.567 0 0 0 252.9 33.8 A 2.386 2.386 0 0 0 254.002 35.838 Q 254.56 36.231 255.4 36.5 Q 257.285 37.103 260.988 37.763 A 134.649 134.649 0 0 0 263.6 38.2 A 123.973 123.973 0 0 1 268.527 38.999 Q 270.864 39.43 272.868 39.912 A 57.464 57.464 0 0 1 275.3 40.55 Q 280 41.9 283.5 45.35 A 11.291 11.291 0 0 1 286.508 50.737 Q 286.965 52.539 286.998 54.675 A 21.585 21.585 0 0 1 287 55 A 21.077 21.077 0 0 1 286.299 60.616 A 14.053 14.053 0 0 1 279.45 69.4 A 29.814 29.814 0 0 1 271.954 72.339 Q 268.416 73.232 264.244 73.539 A 61.969 61.969 0 0 1 259.7 73.7 A 44.82 44.82 0 0 1 249.251 72.51 A 40.678 40.678 0 0 1 246.5 71.75 Q 240.3 69.8 236.4 65.7 A 14.014 14.014 0 0 1 232.595 57.215 A 18.812 18.812 0 0 1 232.5 55.3 L 251 55.3 L 251 55.7 A 6.632 6.632 0 0 0 251.321 57.625 A 4.747 4.747 0 0 0 253.85 60.45 Q 256.6 61.8 259.7 61.8 Q 268 61.8 268 57.9 Q 268 56.068 265.818 55.159 A 7.275 7.275 0 0 0 265.4 55 A 22.93 22.93 0 0 0 263.894 54.544 Q 262.168 54.078 259.604 53.586 A 128.198 128.198 0 0 0 256.9 53.1 Q 252.13 52.294 248.51 51.397 A 61.008 61.008 0 0 1 245.25 50.5 Q 240.7 49.1 237.3 45.75 A 10.984 10.984 0 0 1 234.358 40.449 Q 233.9 38.603 233.9 36.4 A 19.955 19.955 0 0 1 234.582 31.009 A 13.451 13.451 0 0 1 241.25 22.6 Q 248.6 18.5 260.4 18.5 A 45.184 45.184 0 0 1 268.476 19.185 Q 273.297 20.061 277.241 22.057 A 27.651 27.651 0 0 1 278.35 22.65 A 14.76 14.76 0 0 1 283.04 26.679 Q 285.7 30.266 285.7 35.5 Z M 491.2 35.5 L 472.7 35.5 A 4.998 4.998 0 0 0 472.42 33.78 Q 471.929 32.431 470.574 31.646 A 5.747 5.747 0 0 0 470.1 31.4 Q 468.3 30.4 465.6 30.4 Q 461.427 30.4 459.673 31.542 A 2.567 2.567 0 0 0 458.4 33.8 A 2.386 2.386 0 0 0 459.502 35.838 Q 460.06 36.231 460.9 36.5 Q 462.785 37.103 466.488 37.763 A 134.649 134.649 0 0 0 469.1 38.2 A 123.973 123.973 0 0 1 474.027 38.999 Q 476.364 39.43 478.368 39.912 A 57.464 57.464 0 0 1 480.8 40.55 Q 485.5 41.9 489 45.35 A 11.291 11.291 0 0 1 492.008 50.737 Q 492.465 52.539 492.498 54.675 A 21.585 21.585 0 0 1 492.5 55 A 21.077 21.077 0 0 1 491.799 60.616 A 14.053 14.053 0 0 1 484.95 69.4 A 29.814 29.814 0 0 1 477.454 72.339 Q 473.916 73.232 469.744 73.539 A 61.969 61.969 0 0 1 465.2 73.7 A 44.82 44.82 0 0 1 454.751 72.51 A 40.678 40.678 0 0 1 452 71.75 Q 445.8 69.8 441.9 65.7 A 14.014 14.014 0 0 1 438.095 57.215 A 18.812 18.812 0 0 1 438 55.3 L 456.5 55.3 L 456.5 55.7 A 6.632 6.632 0 0 0 456.821 57.625 A 4.747 4.747 0 0 0 459.35 60.45 Q 462.1 61.8 465.2 61.8 Q 473.5 61.8 473.5 57.9 Q 473.5 56.068 471.318 55.159 A 7.275 7.275 0 0 0 470.9 55 A 22.93 22.93 0 0 0 469.394 54.544 Q 467.668 54.078 465.104 53.586 A 128.198 128.198 0 0 0 462.4 53.1 Q 457.63 52.294 454.01 51.397 A 61.008 61.008 0 0 1 450.75 50.5 Q 446.2 49.1 442.8 45.75 A 10.984 10.984 0 0 1 439.858 40.449 Q 439.4 38.603 439.4 36.4 A 19.955 19.955 0 0 1 440.082 31.009 A 13.451 13.451 0 0 1 446.75 22.6 Q 454.1 18.5 465.9 18.5 A 45.184 45.184 0 0 1 473.976 19.185 Q 478.797 20.061 482.741 22.057 A 27.651 27.651 0 0 1 483.85 22.65 A 14.76 14.76 0 0 1 488.54 26.679 Q 491.2 30.266 491.2 35.5 Z M 160 46.1 L 160 49.5 L 120.4 49.5 A 20.347 20.347 0 0 0 120.637 52.714 Q 120.907 54.399 121.485 55.745 A 8.781 8.781 0 0 0 122.95 58.1 Q 125.074 60.515 129.244 60.919 A 18.24 18.24 0 0 0 131 61 A 18.983 18.983 0 0 0 133.603 60.834 Q 134.941 60.648 136.017 60.255 A 7.131 7.131 0 0 0 138.35 58.9 A 6.93 6.93 0 0 0 140.659 54.205 A 9.651 9.651 0 0 0 140.7 53.3 L 160 53.3 A 20.212 20.212 0 0 1 158.886 60.159 A 17.233 17.233 0 0 1 152.7 68.3 Q 145.4 73.7 131.4 73.7 Q 116.7 73.7 108.6 66.85 Q 101.099 60.507 100.544 48.118 A 45.106 45.106 0 0 1 100.5 46.1 Q 100.5 35.444 105.35 28.84 A 21.285 21.285 0 0 1 108.4 25.5 A 26.297 26.297 0 0 1 118.835 19.937 Q 122.793 18.814 127.503 18.569 A 51.789 51.789 0 0 1 130.2 18.5 A 49.616 49.616 0 0 1 138.594 19.164 Q 147.091 20.625 152.35 25.3 Q 159.025 31.233 159.876 42.649 A 46.461 46.461 0 0 1 160 46.1 Z M 431.2 46.1 L 431.2 49.5 L 391.6 49.5 A 20.347 20.347 0 0 0 391.837 52.714 Q 392.107 54.399 392.685 55.745 A 8.781 8.781 0 0 0 394.15 58.1 Q 396.274 60.515 400.444 60.919 A 18.24 18.24 0 0 0 402.2 61 A 18.983 18.983 0 0 0 404.803 60.834 Q 406.141 60.648 407.217 60.255 A 7.131 7.131 0 0 0 409.55 58.9 A 6.93 6.93 0 0 0 411.859 54.205 A 9.651 9.651 0 0 0 411.9 53.3 L 431.2 53.3 A 20.212 20.212 0 0 1 430.086 60.159 A 17.233 17.233 0 0 1 423.9 68.3 Q 416.6 73.7 402.6 73.7 Q 387.9 73.7 379.8 66.85 Q 372.299 60.507 371.744 48.118 A 45.106 45.106 0 0 1 371.7 46.1 Q 371.7 35.444 376.55 28.84 A 21.285 21.285 0 0 1 379.6 25.5 A 26.297 26.297 0 0 1 390.035 19.937 Q 393.993 18.814 398.703 18.569 A 51.789 51.789 0 0 1 401.4 18.5 A 49.616 49.616 0 0 1 409.794 19.164 Q 418.291 20.625 423.55 25.3 Q 430.225 31.233 431.076 42.649 A 46.461 46.461 0 0 1 431.2 46.1 Z M 186.6 65 L 184.9 72.5 L 168.7 72.5 L 168.7 0 L 188.6 0 L 188.6 24.6 A 18.964 18.964 0 0 1 201.715 18.554 A 25.787 25.787 0 0 1 203.4 18.5 A 26.412 26.412 0 0 1 210.177 19.321 A 18.515 18.515 0 0 1 219.9 25.45 A 22.198 22.198 0 0 1 223.839 32.727 Q 224.915 35.947 225.369 39.88 A 53.473 53.473 0 0 1 225.7 46 A 51.68 51.68 0 0 1 225.162 53.726 Q 223.933 61.833 219.9 66.7 A 18.865 18.865 0 0 1 208.146 73.315 A 28.029 28.029 0 0 1 203.4 73.7 A 22.038 22.038 0 0 1 195.881 72.477 Q 190.225 70.438 186.6 65 Z M 353.7 19.7 L 364.9 19.7 L 364.9 33.2 L 353.7 33.2 L 353.7 53.3 A 17.139 17.139 0 0 0 353.792 55.147 Q 354.033 57.358 354.9 58.55 A 3.535 3.535 0 0 0 356.456 59.731 Q 357.078 59.987 357.87 60.104 A 9.873 9.873 0 0 0 359.3 60.2 L 364.9 60.2 L 364.9 71.9 A 22.689 22.689 0 0 1 362.994 72.436 Q 362.064 72.658 360.991 72.849 A 51.419 51.419 0 0 1 358.7 73.2 A 68.586 68.586 0 0 1 355.991 73.505 Q 353.85 73.7 352.1 73.7 Q 346.372 73.7 342.36 72.344 A 15.881 15.881 0 0 1 338.55 70.5 Q 334.264 67.613 333.845 61.061 A 22.922 22.922 0 0 1 333.8 59.6 L 333.8 33.2 L 326.4 33.2 L 326.4 19.7 L 334.6 19.7 L 338.9 3.7 L 353.7 3.7 L 353.7 19.7 Z M 317 72.5 L 297.1 72.5 L 297.1 19.7 L 317 19.7 L 317 72.5 Z M 188.4 44.5 L 188.4 47.8 A 18.599 18.599 0 0 0 188.684 51.148 Q 189.191 53.914 190.6 55.9 A 7.151 7.151 0 0 0 195.627 58.891 A 10.902 10.902 0 0 0 197.2 59 A 10.297 10.297 0 0 0 200.861 58.402 Q 205.8 56.53 205.8 48.8 L 205.8 43.5 A 18.026 18.026 0 0 0 205.431 39.677 Q 204.02 33.2 197.2 33.2 A 9.728 9.728 0 0 0 194.492 33.555 A 6.987 6.987 0 0 0 190.6 36.35 A 11.584 11.584 0 0 0 188.883 40.219 Q 188.4 42.156 188.4 44.5 Z M 317 13.5 L 297.1 13.5 L 297.1 0 L 317 0 L 317 13.5 Z M 120.5 40.1 L 139.9 40.1 Q 139.9 36 137.55 33.6 A 7.707 7.707 0 0 0 133.78 31.51 Q 132.549 31.21 131.094 31.2 A 14.586 14.586 0 0 0 131 31.2 Q 122.998 31.2 121.011 37.649 A 14.26 14.26 0 0 0 120.5 40.1 Z M 391.7 40.1 L 411.1 40.1 Q 411.1 36 408.75 33.6 A 7.707 7.707 0 0 0 404.98 31.51 Q 403.749 31.21 402.294 31.2 A 14.586 14.586 0 0 0 402.2 31.2 Q 394.198 31.2 392.211 37.649 A 14.26 14.26 0 0 0 391.7 40.1 Z"
                  vector-effect="non-scaling-stroke"
                />
              </g>
            </svg>
          </Box>
          <h4>that inspire</h4>
        </FlexBox>

        <Box className={styles.horizontalLine} />
      </FlexBox>

      <Box className={styles.blackArrow}>
        <Image src={BlackArrow} alt="any website any idea any business" />
      </Box>
    </FlexBox>
  );
}
