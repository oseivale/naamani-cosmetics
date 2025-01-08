import { PageBannerProps } from "@/app/types/page-wrapper";
import styles from "./styles.module.css";

export default function PageBanner({
  title,
  backgroundImage,
  customBGStyles,
  children,
}: PageBannerProps) {
  return (
    <>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: customBGStyles?.bgPosition,
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
