import { Metadata } from "next";
import styles from "./styles.module.css";
import { products } from "@/app/data/products";
import Accordion from "@/app/components/accordion";
import Dropdown from "@/app/components/dropdown";
import VariantButton from "@/app/components/variant-button";
import ProductImageGallery from "@/app/components/product-image-gallery";
import AddToCartButton from "@/app/components/add-to-cart-button";
import Link from "next/link";

// Mock function to simulate a database call or API call
async function getProduct(id: string) {
  return products.find((product) => product.id === id) || null;
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { "product-details": string };
}): Promise<Metadata> {
  const product = await getProduct(params["product-details"]);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - Shop Now`,
    description: product.description,
  };
}

// Product Page Component
export default async function ProductPage({
  params,
}: {
  params: { "product-details": string };
}) {
  const product = await getProduct(params["product-details"]);

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link> &gt; <Link href="/products">All Products</Link> &gt;{" "}
        {product.name}
      </div>

      <div className={styles.productSection}>
        {/* Image Gallery */}
        <ProductImageGallery
          images={product.images}
          productName={product.name}
        />

        {/* Product Info */}
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productPrice}>${product.price}</p>

          <div>
            {product.variants.length > 1 && (
              <p className={styles.sizeHeader}>Select Size</p>
            )}
            {product.variants.length === 1 && (
              <p className={styles.productSingleSize}>
                Size: {product.variants[0].size}
              </p>
            )}
            {product?.variants?.map((variant) => (
              <VariantButton variant={variant.size} key={variant.size} />
            ))}
          </div>

          {product?.scents && (
            <div>
              <Dropdown options={product?.scents} label="Select Scent" />
            </div>
          )}

          <div className={styles.addToCart}>
            <AddToCartButton
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
            />
          </div>

          <Accordion
            items={[
              { title: "Product Description", content: <p>{product.description}</p> },
              { title: "Ingredients", content: product.ingredients },
              {
                title: "How to Use",
                content: (
                  <div className={styles.directions}>
                    <h3>Directions for Use</h3>
                    <ol>
                      {product?.directions?.split("|").map((direction) => (
                        <li key={direction}>{direction}</li>
                      ))}
                    </ol>
                  </div>
                ),
              },
            ]}
          />
          <div className={styles.askButton}>
            <span>Questions? </span>
            <Link href="#">Ask about this product</Link>
          </div>
        </div>
      </div>
    </div>
  );
}