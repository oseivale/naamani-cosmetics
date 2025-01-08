import { Product } from "@/app/types/product";
import ProductCard from "../product-card";
import styles from "./styles.module.css";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          id={product.id}
        />
      ))}
    </div>
  );
}
