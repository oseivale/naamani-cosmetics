"use client"; // Enable client-side animations on scroll

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { AlternatingRowProps } from "@/app/types/page-row";

export default function AlternatingRow({
  image,
  content,
  cta,
  reverse = false,
}: AlternatingRowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const row = rowRef.current;
      if (row && row.getBoundingClientRect().top < window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={reverse ? styles.rowReverse : ""}>
      <div
        ref={rowRef}
        className={`${styles.row} ${
          reverse ? styles.reverse : styles.nonReverse
        } ${isVisible ? styles.visible : ""}`}
      >
        <div
          className={styles.imageWrapper}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div
          className={`${styles.card} ${
            reverse ? styles.slideFromLeft : styles.slideFromRight
          }`}
        >
          <div className={styles.content}>{content}</div>
          <button className={styles.ctaButton}>{cta}</button>
        </div>
      </div>
    </div>
  );
}
