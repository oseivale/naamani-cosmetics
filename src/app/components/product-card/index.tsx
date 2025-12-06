import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { ProductCardProps } from "@/app/types/product";

export default function ProductCard({ name, price, description, id, mainImage}: ProductCardProps) {
  return (
    <Link className={styles.productCardWrapper} href={`/products/${id}`}>
      <div className={styles.productCard}>
        <div>
          <div className={styles.productImg}>
            {/* <Image src="https://venedorcitrus.myshopify.com/cdn/shop/products/dbcada3-65f5-41ba-a914-23a44b09575b_01.jpg?v=1604582479&width=400" alt={'#'} height={100} width={100} /> */}
            <Image src={mainImage} alt={'#'} height={1000} width={1000} />
          </div>
          <h3>{`${name?.slice(0,25)}`}{name.length > 24 ? `...` : ''}</h3>
          <p className={styles.productDescription}>{`${description?.slice(0,40)}...`}</p>
          <p className={styles.price}>{`$${price}`}</p>
        </div>
        <div className={styles.productLink}>View Product</div>
      </div>
    </Link>
  );
}
