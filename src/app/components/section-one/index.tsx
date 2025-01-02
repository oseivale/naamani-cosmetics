import Image from "next/image";
import ProductCard from "../product-card";
import styles from "./styles.module.css";
import Link from "next/link";

export default function SectionOne() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* <h1 className={styles.sectionHeader}>Featured Products</h1> */}
        <div className={styles.contentWrapper}>
          <div>
            {" "}
            <div className={styles.contentWrapper}>
              {/* Left Image */}
              <div className={styles.imageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?q=80&w=3330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
                  alt="Skincare Model"
                  width={500}
                  height={600}
                  className={styles.image}
                />
              </div>

              {/* Right Content */}
              <div className={styles.card}>
                <h2 className={styles.heading}>Our Story</h2>
                <p className={styles.description}>
                  We strive to purchase all our raw materials from reputable
                  Canadian Companies who also believe in sourcing their products
                  directly from the local communities that produce these raw
                  materials.
                </p>
                <Link href={"/about"} className={styles.learnMore}>
                  Learn More
                </Link>
              </div>
            </div>
            {/* Statistics Section */}
            {/* <div className={styles.statistics}>
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  90<span className={styles.percent}>%</span>
                </span>
                <span className={styles.statLabel}>Happy Customer</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  35<span className={styles.plus}>+</span>
                </span>
                <span className={styles.statLabel}>New Outlet</span>
              </div>
            </div> */}
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              Expert Skincare For <br /> Your Beautiful Skin
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
                <li>Nourishing Facial Moisturizers</li>
              </ul>
              <ul className={styles.featureList}>
                <li>Moisturizing Body Butters</li>
                <li>Clarifying Oil Cleansers</li>
              </ul>
            </div>
            {/* <button className={styles.button}>Learn More</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
