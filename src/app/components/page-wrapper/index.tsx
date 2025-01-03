import styles from "./styles.module.css";
import { ReactNode } from "react";

type PageBannerProps = {
  title: string; // Banner title (e.g., "About Us")
  backgroundImage: string;
  children: ReactNode // Path to the background image
};

export default function PageBanner({
  title,
  backgroundImage,
  children
}: PageBannerProps) {
  return (
    <>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className={styles.overlay}></div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.test}>
        <section className={styles.sectionContainer}>{children}</section>
      </div>
      
    </>
  );
}
