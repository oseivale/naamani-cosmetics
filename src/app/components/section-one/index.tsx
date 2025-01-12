import { CheckMark } from "@/app/icons/checkmark";
import styles from "./styles.module.css";

export default function SectionOne() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div></div>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              Expert Skincare For Your Beautiful Skin
            </h2>
            <p className={styles.description}>
              Our goal is to create natural products for skin care with love and
              passion, focusing on making small batches at a time to ensure your
              full satisfaction with every product you receive. Our product line
              includes:
            </p>
            <div className={styles.features}>
              <ul className={styles.featureList}>
                <li>Face Serums</li>
                <li>Rejuvenating Face Oil</li>
              </ul>
              <ul className={styles.featureList}>
                <li>Moisturizing Body Butters</li>
                <li>Nourishing Facial Moisturizers</li>
              </ul>
              <ul className={styles.featureList}>
                <li>Clarifying Oil Cleansers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
