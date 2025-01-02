"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Arrow } from "@/app/icons/arrow";

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
        className={`${styles.textSection} ${
          animateTextSection ? styles.animateFadeIn : ""
        }`}
      >
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h1
          className={`${styles.title} ${
            animateTitle ? styles.animateTitle : ""
          }`}
        >
          <span>Fresh</span>
          <span>and</span>
          <span>Natural</span>
          <span>Skincare</span>
          <span>For</span>
          <span>Best</span>
          <span>Result</span>
        </h1>
        {/* <p>Cruelty Free | Paraben Free | Gluten Free</p> */}
        <Link
          href={"/products"}
          className={`${styles.link} ${
            animateTitle ? styles.animateTitle : ""
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
          className={`${styles.leftImage} ${
            animateImages ? styles.animateSlideUp : ""
          }`}
        >
          <img
            className={styles.img}
            src="http://archivo.halodemo.com/wp-content/uploads/2022/06/eco-friendly-zero-waste-face-care-accessories-in-a-linen-reusable-bag-top-view.jpg"
            alt="Left Skincare Items"
          />
          
        {/* <img className={styles.img} alt={'#'} src={'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} width={200} /> */}

        </div>
        <div
          className={`${styles.rightImage} ${
            animateImages ? styles.animateSlideUp : ""
          }`}
        >
          {/* <img
            className={styles.img}
            src="http://archivo.halodemo.com/wp-content/uploads/2022/06/serum-with-herbal-extracts-for-skincare-flat-lay-minimalism.jpg"
            alt="Right Skincare Items"
          /> */}
          <img
            className={styles.img}
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Left Skincare Items"
          />

        </div>
        
      </div>
    </div>
    </div>
    
  );
}
