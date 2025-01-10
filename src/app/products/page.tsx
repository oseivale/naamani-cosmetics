"use client";

import { useState } from "react";
import ProductFilter from "../components/product-filter";
import ProductGrid from "../components/product-grid";
import { products as initialProducts } from "../data/products";
import PageBanner from "../components/page-wrapper";
import styles from "./styles.module.css";

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);

  const categories = Array.from(
    new Set(initialProducts.map((product) => product.category))
  );

  const handleFilter = (category: string) => {
    if (category === "All") {
      setProducts(initialProducts);
    } else {
      setProducts(
        initialProducts.filter((product) => product.category === category)
      );
    }
  };

  return (
    <PageBanner
      title={"Shop"}
      backgroundImage="/images/naamani-shop-bg-img.avif"
    >
      <div style={{ padding: "2rem" }}>
        <h1 className={styles.productsHeader}>Browse our products</h1>
        {/* <p className={styles.productInfo}>
          Our goal is to create natural products for skin care with love and
          passion, focusing on making small batches at a time to ensure your
          full satisfaction with every product you receive.
        </p> */}
        <div className={styles.contentContainer}>
          <ProductFilter categories={categories} onFilter={handleFilter} />
          <ProductGrid products={products} />
        </div>
      </div>
    </PageBanner>
  );
}
