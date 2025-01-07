"use client";

import { useState } from "react";
import ProductFilter from "../components/product-filter";
import ProductGrid from "../components/product-grid";
import { products as initialProducts } from "../data/products";
import PageBanner from "../components/page-wrapper";
import styles from "./styles.module.css";
import CategoryFilter from "../components/product-filter";

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
    // <CartProvider>
    <PageBanner
      title={"Shop"}
      backgroundImage="https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_05.jpg?v=1604581404&width=220"
      // backgroundImage="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

    // </CartProvider>
  );
}
