import { Metadata } from "next";
import styles from "./styles.module.css";
import { products } from "@/app/data/products";
import Accordion from "@/app/components/accordion";
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
  params: { productId: string };
}): Promise<Metadata> {
  const product = await getProduct(params.productId);

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
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);

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
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/products">All Products</Link> &gt; {product.name}
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

          <div className={styles.addToCart}>
            <AddToCartButton product={product} />
          </div>
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
                      {product?.directions
                        ?.split("|")
                        .map((direction, index) => (
                          <li key={index}>{direction}</li>
                        ))}
                    </ol>
                  </div>
                ),
              },
              {
                title: "Shipping & Returns",
                content:
                  "Free shipping on orders over $50. Easy returns within 30 days of purchase. See our return policy for more details.",
              },
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

// TO DO:
// Fix Locale Storage so that it persists correctly
// fix add to cart button for variants so that it is only enabled once all manadotroy variants have been selected

// (Possibly) create FAQ page ?
