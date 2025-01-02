import Link from "next/link";
import styles from "./styles.module.css";

export default function ProductCard({ name, price, description, id}: any) {
  return (
    <Link className={styles.productCardWrapper} href={`/products/${id}`}>
      <div className={styles.productCard}>
        <div>
          <div className={styles.productImg}>
            <img src="https://venedorcitrus.myshopify.com/cdn/shop/products/dbcada3-65f5-41ba-a914-23a44b09575b_01.jpg?v=1604582479&width=400" />
          </div>
          <h3>{name}</h3>
          <p>{`${description?.slice(0,40)}...`}</p>
          <p className={styles.price}>{`$${price}`}</p>
        </div>
        <div className={styles.productLink}>View Product</div>
      </div>
    </Link>
  );
}
