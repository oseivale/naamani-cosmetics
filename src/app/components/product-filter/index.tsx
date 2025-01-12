"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Info } from "@/app/icons/information";
import { ProductFilterProps } from "@/app/types/product";

export default function ProductFilter({
  categories,
  onFilter,
}: ProductFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the user is on a mobile device
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust width as needed
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    onFilter(value);
  };

  return (
    <div className={styles.filter}>
      {isMobile ? (
        // Dropdown for mobile
        <div className={styles.mobileDropdown}>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className={styles.dropdown}
          >
            <option value="All">All Products</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className={styles.otherResources}>
            <h2>Other Helpful Resources</h2>
            <span className={styles.glossaryWrapper}>
              <Link className={styles.glossary} href={"/ingredient-glossary"}>
                {" "}
                <Info />
                Ingredient Glossary
              </Link>
            </span>
          </div>
        </div>
      ) : (
        // Checkboxes for desktop
        <div className={styles.checkboxGroup}>
          <div>
            <h2>Filter by type</h2>
          </div>
          <label className={styles.checkboxLabel}>
            <input
              type="radio"
              name="category"
              value="All"
              checked={selectedCategory === "All"}
              onChange={() => handleCategoryChange("All")}
              className={styles.checkbox}
            />
            All Products
          </label>
          {categories.map((category, index) => (
            <label key={index} className={styles.checkboxLabel}>
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
                className={styles.checkbox}
              />
              {category}
            </label>
          ))}
          {/* <div>
            <h2>Filter by skin concern</h2>
            {['Dry', 'Combination', 'Oily'].map((category, index) => (
            <label key={index} className={styles.checkboxLabel}>
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
                className={styles.checkbox}
              />
              {category}
            </label>
          ))}
          </div> */}
          <div>
            <h2>Other Helpful Resources</h2>
            <span className={styles.glossaryWrapper}>
              <Link className={styles.glossary} href={"/ingredient-glossary"}>
                {" "}
                <Info />
                Ingredient Glossary
              </Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
