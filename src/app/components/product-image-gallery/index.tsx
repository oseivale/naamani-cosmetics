"use client"; // Mark as client component for interactivity

import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { ProductImageGalleryProps } from "@/app/types/product";

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
        <Image src={mainImage} alt={productName} height={1000} width={1000} />
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
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
