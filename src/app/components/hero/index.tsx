"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Arrow } from "@/app/icons/arrow";
import Image from "next/image";

export default function HeroBanner() {
  const [animateTextSection, setAnimateTextSection] = useState(false);

  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateImages, setAnimateImages] = useState(false);

  useEffect(() => {
    // Trigger animations when the component mounts
    setAnimateTextSection(true);
    setAnimateTitle(true);
    setTimeout(() => {
      setAnimateImages(true);
    }, 500); // Delay images animation for a smoother effect
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div
          className={`${styles.textSection} ${animateTextSection ? styles.animateFadeIn : ""
            }`}
        >
          <p className={styles.subtitle}>
            Thoughtfully formulated with nature’s best for healthy, radiant skin.
          </p>
          <h1
            className={`${styles.title} ${animateTitle ? styles.animateTitle : ""
              }`}
          >
            <span>Skincare</span>
            <span>Rooted</span>
            <span>in</span>
            <span>Nature,</span>
            <span>Crafted</span>
            <span>with</span>
            <span>Care.</span>

          </h1>
          {/* <p>Cruelty Free | Paraben Free | Gluten Free</p> */}
          <Link
            href={"/products"}
            className={`${styles.link} ${animateTitle ? styles.animateTitle : ""
              }`}
          >
            {" "}
            <span>Shop Now</span>{" "}
            <span className={styles.arrow}>
              <Arrow />
            </span>
          </Link>
        </div>

        <div className={styles.imageSection}>
          <div
            className={`${styles.leftImage} ${animateImages ? styles.animateSlideUp : ""
              }`}
          >
            <Image
              className={styles.img}
              src={
                "/images/eco-friendly-zero-waste-face-care-accessories-in-a-linen-reusable-bag-top-view.jpg"
              }
              alt="Left Skincare Items"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}