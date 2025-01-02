import ProductCard from "../product-card";
import styles from "./styles.module.css";

export interface ProductVariant {
  id: string; // Unique ID for the variant
  size: string; // Size of the variant (e.g., "2oz", "30ml")
  price: number; // Price of the variant
}

export interface Product {
  id: string; // Unique ID for the product
  name: string; // Name of the product
  price: number; // Base price of the product
  availability: number; // Number of items available in stock
  category: string; // Category of the product (e.g., "face", "body")
  description: string; // Product description
  ingredients: string; // List of ingredients
  directions: string; // Directions for use
  caution: string; // Cautionary information
  featured?: boolean; // Optional: Whether the product is featured
  scents?: string[] | null; // Optional: List of scents (null if none)
  variants: ProductVariant[]; // List of product variants
  variantHeading?: string; // Optional: Heading for variants (e.g., "Choose Your Scent")
  images: string[]; // List of image URLs
  productSingleSize?: string; // Optional: Single size for the product
}

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
