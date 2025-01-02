import { useState } from "react";
import styles from "./styles.module.css";

type ProductFilterProps = {
  categories: string[]; // List of available categories
  onFilter: (category: string) => void; // Callback for category selection
};

export default function ProductFilter({ categories, onFilter }: ProductFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onFilter(value);
  };

  return (
    <div className={styles.filter}>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className={styles.dropdown}
      >
        <option value="All">All Products</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}