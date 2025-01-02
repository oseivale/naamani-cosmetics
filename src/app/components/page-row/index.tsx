// "use client"; // Enable animations on scroll for client components

// import { useEffect, useState } from "react";
// import styles from "./styles.module.css";

// type AlternatingRowProps = {
//   image: string; // Image for the section
//   content: string | JSX.Element; // Content inside the card
//   cta: string; // Call-to-action button text
//   reverse?: boolean; // Reverse the layout for alternating effect
// };

// export default function AlternatingRow({
//   image,
//   content,
//   cta,
//   reverse = false,
// }: AlternatingRowProps) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const row = document.querySelector(`#${styles.row}`);
//       if (row && row.getBoundingClientRect().top < window.innerHeight * 0.8) {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Check visibility on load
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`${styles.row} ${reverse ? styles.reverse : ""} ${
//         isVisible ? styles.visible : ""
//       }`}
//       id={styles.row}
//     >
//       <div
//         className={styles.imageWrapper}
//         style={{ backgroundImage: `url(${image})` }}
//       ></div>
//       <div className={styles.card}>
//         <div className={styles.content}>{content}</div>
//         <button className={styles.ctaButton}>{cta}</button>
//       </div>
//     </div>
//   );
// }


"use client"; // Enable client-side animations on scroll

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

type AlternatingRowProps = {
  image: string; // Image for the section
  content: string | JSX.Element; // Content inside the card
  cta: string; // Call-to-action button text
  reverse?: boolean; // Reverse the layout for alternating effect
};

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
    <div className={reverse ? styles.rowReverse: ''}>
      <div
      ref={rowRef}
      className={`${styles.row} ${reverse ? styles.reverse : styles.nonReverse} ${
        isVisible ? styles.visible : ""
      }`}
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