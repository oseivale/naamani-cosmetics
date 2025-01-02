import { products } from "@/app/data/products";
import ProductCard from "../product-card";
import styles from "./styles.module.css";

export default function FeaturedProducts() {

  const filteredProducts = products.filter(product => product.featured === true)
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h1 className={styles.sectionHeader}>Featured Products</h1>
        <div className={styles.contentWrapper}>
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                name={product.name}
                price={product.price}
                description={product.description}
                id={product.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
