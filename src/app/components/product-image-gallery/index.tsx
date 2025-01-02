"use client"; // Mark as client component for interactivity

import { useState } from "react";
import styles from "./styles.module.css";

type ProductImageGalleryProps = {
  images: string[]; // Array of product images
  productName: string; // Name of the product
};

export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]); // State for main image

  const [isFading, setIsFading] = useState(false); // State to trigger fade-in animation

  const handleThumbnailClick = (image: string) => {
    if (image === mainImage) return; // Prevent animation if the same image is clicked
    setIsFading(true); // Start fade-out
    setTimeout(() => {
      setMainImage(image); // Set new image
      setIsFading(false); // End fade-in
    }, 300); // Match fade-out duration
  };

  return (
    <div className={styles.imageGallery}>
      {/* Main Image */}
      <div className={`${styles.mainImage} ${isFading ? styles.fading : ""}`}>
        <img src={mainImage} alt={productName} />
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnailList}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${
              image === mainImage ? styles.activeThumbnail : ""
            }`}
            //={() => setMainImage(image)} // Update main image on click
            onClick={() => handleThumbnailClick(image)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
}