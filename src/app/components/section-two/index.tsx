import styles from "./styles.module.css";
import Link from "next/link";
import { NaamaniCanada } from "@/app/icons/naamani-canada";
import { NaturalResources } from "@/app/icons/natural-resources";
import { NaamaniEarth } from "@/app/icons/naamani-earth";
import ConcernCard from "../concern-card";

export default function SectionTwo() {
  return (
    <section className={styles.sectionTwo}>
      <h1>Shop your focus</h1>
      <div className={styles.concernsGrid}>
        <ConcernCard
          label={"Hydration & Moisture"}
          imageUrl={"/images/photo-1660573041206-55261010c242.avif"}
          bgSize="cover"
          bgPosition={"center 45%"}
          href={"#"}
        />
        <ConcernCard
          label={"Cleansing Essentials"}
          bgSize="cover"
          imageUrl={"/images/mpho-maponyane-BcY4v-sHwKg-unsplash.jpg"}
          href={"#"}
        />
        <ConcernCard
          label={"Targeted Treatments"}
          bgSize="cover"
          imageUrl={"/images/photo-1706419972358-028e2c713133.avif"}
          href={"#"}
        />
        <ConcernCard
          label={"Self-Care & Indulgence"}
          bgSize="cover"
          bgPosition={"center 125%"}
          imageUrl={"/images/maddi-bazzocco-UKGGgWb6_0g-unsplash.jpg"}
          href={"#"}
        />
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
