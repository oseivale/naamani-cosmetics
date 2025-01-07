"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "@/app/contexts/cart";
import { CartAdd } from "@/app/icons/cart-add";
import styles from "./styles.module.css";
import QuantitySelector from "../quantity-selector";
import { AddToCartButtonProps, Variant } from "@/app/types/add-to-cart-button";


export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart, quantity, handleQuantityChange } = useCart();

  const hasMultipleVariants =  product?.variants?.length ?  product?.variants?.length > 1 : false; // Check if the product has multiple size options
  const isSingleVariant = product.variants?.length === 1; // Check if there's only one size option

  // State for the selected variant and scent
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    isSingleVariant ? product.variants?.[0] || null : null
  );
  const [selectedScent, setSelectedScent] = useState<string | null>(null);

  // Automatically handle cases where there are no variants or a single variant
  const getSelectedVariant = () => {
    if (isSingleVariant) return product.variants?.[0];
    return selectedVariant;
  };

  // Handle selecting a scent
  const handleScentSelect = (scent: string) => {
    setSelectedScent(scent);
    setIsOpen(false); // Close the dropdown after selection
  };
  // Close the dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const handleAddToCart = () => {
    const variant = getSelectedVariant();

    if (!variant && hasMultipleVariants) {
      console.error("Variant not selected or not found!");
      return;
    }

    addToCart(
      product,
      variant ? variant.id : null, // Pass variant ID if available, or null if no variants
      quantity,
      selectedScent
    );
  };

  // Attach and clean up the event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Size Selector */}
      {hasMultipleVariants && (
        <div>
          <p>Select Size:</p>
          {product.variants?.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant)}
              className={
                selectedVariant?.id === variant.id
                  ? styles.selectedButton
                  : styles.button
              }
            >
              <span className={styles.variantText}>
                <span className={styles.variantPrice}>${variant.price}</span>
                <span className={styles.variantSize}>{variant.size}</span>
              </span> 
            </button>
          ))}
        </div>
      )}

      {/* Scent Selector */}
      {/* {product.scents && product.scents.length > 0 && (
        <div>
          <p>Select Scent:</p>
          {product.scents.map((scent) => (
            <button
              key={scent}
              onClick={() => setSelectedScent(scent)}
              className={
                selectedScent === scent ? styles.selectedButton : styles.button
              }
            >
              {scent}
            </button>
          ))}
        </div>
      )} */}
      {product.scents && product.scents.length > 0 && (
        <div ref={dropdownRef} className={styles.dropdown}>
          {/* <label className={styles.label}>{label}</label> */}
          <p>Select Scent:</p>
          <button
            className={styles.selected}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {selectedScent || "Select an option"}{" "}
            <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <ul className={styles.options}>
              {product.scents?.map((scent, index) => (
                <li
                  key={index}
                  className={styles.option}
                  onClick={() => handleScentSelect(scent)}
                  // onClick={() => setSelectedScent(scent)}
                >
                  {scent}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Quantity Selector */}
      <p className={styles.quantityLabel}>Select quantity</p>
      <QuantitySelector
        onQuantityChange={handleQuantityChange}
        quantityTest={quantity}
      />

      {/* Add to Cart Button */}
      <button
        // disabled={
        //   (hasMultipleVariants && !selectedVariant) || // Disable if variant not selected when required
        //   (product.scents && product.scents.length > 0 && !selectedScent) // Disable if scent not selected when required
        // }
        className={styles.addToCartButton}
        onClick={handleAddToCart}
      >
        <CartAdd />
        Add to Cart
      </button>
    </>
  );
}

// const product = {
//   id: "2",
//   name: "Body Butter",
//   basePrice: 25.0,
//   availability: 80,
//   featured: true,
//   category: "body",
//   description: `We formulate our body butter with natural and organic products.
//         We manufacture all our products in small batches at a time to ensure we maintain
//         freshness.`,
//   ingredients: `Aqua, Shea Butter, Aloe Vera Leaf Juice`,
//   directions: `Apply directly to skin after shower.`,
//   caution: `Avoid contact with eyes. Keep out of reach of children.`,
//   scents: ["Lavender Vanilla", "Lemon Verbena", "Unscented"],
//   variants: [
//     {
//       id: "db5c3c3a-2db0-49f5-b1b2-a6ef335c963d",
//       size: "2oz",
//       price: 8,
//     },
//     {
//       id: "d8cc5c11-77d4-4e55-b951-fa4961778b7e",
//       size: "8oz",
//       price: 25,
//     },
//   ],
//   variantHeading: `Choose Your Scent`,
//   images: [
//     "https://example.com/image1.jpg",
//     "https://example.com/image2.jpg",
//   ],
// };

// const selectedVariantId = "db5c3c3a-2db0-49f5-b1b2-a6ef335c963d"; // 2oz size
// const selectedScent = "Lavender Vanilla"; // Selected scent
// const quantity = 2; // Adding 2 of this product to the cart

// type AddToCartButtonProps = {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// };
