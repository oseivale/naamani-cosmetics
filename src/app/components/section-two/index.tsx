import styles from "./styles.module.css";
import Link from "next/link";
import { NaamaniCanada } from "@/app/icons/naamani-canada";
import { NaturalResources } from "@/app/icons/natural-resources";
import { NaamaniEarth } from "@/app/icons/naamani-earth";

export default function SectionTwo() {
  return (
    <section className={styles.sectionTwo}>
      <h1>Shop your focus</h1>
      <div className={styles.concernsGrid}>
        <Link
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center 45%",
            backgroundImage: `linear-gradient(to top, rgba(94, 50, 113, 0.7), rgba(94, 50, 113, 0.7)), url(https://images.unsplash.com/photo-1660573041206-55261010c242?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
          href={"#"}
          className={styles.concernCard}
        >
          <span className={styles.concernLabel}>Hydration & Moisture</span>
        </Link>
        <Link
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center 45%",
            backgroundImage: `linear-gradient(to top, rgba(94, 50, 113, 0.7), rgba(94, 50, 113, 0.7)), url(https://images.unsplash.com/photo-1586811032606-f8fd4a8f80dd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
          href={"#"}
          className={styles.concernCard}
        >
          <span className={styles.concernLabel}>Cleansing Essentials</span>
        </Link>
        <Link
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(to top, rgba(94, 50, 113, 0.7), rgba(94, 50, 113, 0.7)), url(https://images.unsplash.com/photo-1706419972358-028e2c713133?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
          href={"#"}
          className={styles.concernCard}
        >
          <span className={styles.concernLabel}>Targeted Treatments</span>
        </Link>
        <Link
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center 125%",
            backgroundImage: `linear-gradient(to top, rgba(94, 50, 113, 0.7), rgba(94, 50, 113, 0.7)), url(https://images.unsplash.com/photo-1559881230-1af605ca3f67?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
          href={"#"}
          className={styles.concernCard}
        >
          <span className={styles.concernLabel}>Self-Care & Indulgence</span>
        </Link>
        {/* <Link href={'#'} className={styles.concernCard}>
  <span className={styles.concernLabel}>Cleanser & Serum</span>
  </Link> */}
      </div>
      <div className={styles.sectionTwoBanner}>
        <div className={styles.testCopy}>
          <h1 className={styles.testCopyHeader}>
            Naturally Canadian. Naturally Caring.
          </h1>
          <h2>
            {" "}
            At the heart of our skincare lies a commitment to what matters most
            — your skin, your environment, and our shared home.
          </h2>
          {/* <h2>
           
            Proudly Canadian, we craft our products locally using ingredients
            sourced with care, ensuring every bottle supports local communities
            while reducing our carbon footprint.
          </h2> */}
          {/* <p>
            {" "}
            Our formulations are rooted in
            nature, created with plant-based, natural ingredients that nourish
            your skin without compromise. We believe in transparency and
            sustainability, which is why our products are free from harmful
            chemicals, cruelty-free, and consciously packaged to minimize waste.
            By choosing our skincare, you’re not just choosing healthier
            skin—you’re choosing to care for the planet. Together, we can make
            beauty a more thoughtful, sustainable journey.
          </p> */}
        </div>

        <div className={styles.highlightsWrapper}>
          <div className={styles.highlightCard}>
            <NaamaniCanada />
            <h2>Local</h2>
          </div>
          <div className={styles.highlightCard}>
            <NaturalResources />
            <h2>Natural</h2>
          </div>
          <div className={styles.highlightCard}>
            <NaamaniEarth />
            <h2>Conscious</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
