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
          {/* <p className={styles.productAvailability}>
            Availability: {product.availability} in stock
          </p> */}
          {/* <div className={styles.quantity}>
            <button className={styles.quantityBtn}>
              <Minus />
            </button>
            <input className={styles.quantityInput} defaultValue={1} />
            <button className={styles.quantityBtn}>
              <Add />
            </button>
          </div> */}

          <div>
            {product.variants.length > 1 && (
              <p className={styles.sizeHeader}>Select Size</p>
            )}
            {/* <p className={styles.productSingleSize}>{product.productSingleSize && product.productSingleSize}</p> */}
            {product.variants.length === 1 && (
              <p className={styles.productSingleSize}>
                Size: {product.variants[0].size}
              </p>
            )}
            {product?.variants?.map((variant) => {
              // return <button className={styles.variant}>{variant.size}</button>;
              if (product.variants.length > 1)
                return <VariantButton key={variant.id} variant={variant.size} />;
            })}
          </div>
          {product?.scents && (
            <div>
              <Dropdown options={product?.scents} label="Select Scent" />
            </div>
          )}

          {/* <p>Select your Scent</p> */}
          {/* <div>
            {product?.scents?.map((scent) => {
              return <button className={styles.variant}>{scent}</button>;
            })}
          </div> */}

          <div className={styles.addToCart}>
            <AddToCartButton
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
            />
            {/* <div className={styles.addToCartButtonContainer}>
              <button className={styles.addToCartButton}><CartAdd />Add to Cart</button>
            </div> */}
          </div>
          {/* <p className={styles.productType}>{product.description}</p> */}
          <Accordion
            items={[
              {
                title: "Product Description",
                content: (
                  <>
                    <p>{product.description}</p>
                  </>
                ),
              },
              {
                title: "Ingredients",
                content: product.ingredients,
              },
              {
                title: "How to Use",
                content: (
                  <div className={styles.directions}>
                    <h3>Directions for Use</h3>
                    <ol>
                      {product?.directions?.split("|").map((direction, index) => (
                        <li key={index}>{direction}</li>
                      ))}
                    </ol>
                  </div>
                ),
              },
              // {
              //   title: "Shipping & Returns",
              //   content:
              //     "Free shipping on orders over $50. Easy returns within 30 days of purchase. See our return policy for more details.",
              // },
            ]}
          />
          <div className={styles.askButton}>
            <span>Questions? </span>
            <Link href="#">Ask about this product</Link>
          </div>

          {/* <div className={styles.share}>
            <p>Share:</p>
            <div className={styles.shareIcons}>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Pinterest</a>
            </div>
          </div> */}
        </div>
      </div>
      {/* <Tabs
        tabs={[
          {
            label: "Description",
            content: (
              <div>
                <h3>Product Description</h3>
                <p>{product.description}</p>
              </div>
            ),
          },
          {
            label: "Ingredients",
            content: (
              <div>
                <h3>Product Ingredients</h3>
                <p>{product.ingredients}</p>
              </div>
            ),
          },
          // {
          //   label: "Product Video",
          //   content: (
          //     <div>
          //       <h3>Product Video</h3>
          //       <video width="100%" controls>
          //         <source src="/videos/product-demo.mp4" type="video/mp4" />
          //         Your browser does not support the video tag.
          //       </video>
          //     </div>
          //   ),
          // },
          {
            label: "Directions",
            content: (
              <div className={styles.directions}>
                <h3>Directions for Use</h3>
                <ol>
                  {product?.directions?.split("|").map((direction) => (
                    <li>{direction}</li>
                  ))}
                </ol>
              </div>
            ),
          },
        ]}
      /> */}
    </div>
  );
}
