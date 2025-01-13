"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "@/app/contexts/cart";
import { CartAdd } from "@/app/icons/cart-add";
import styles from "./styles.module.css";
import QuantitySelector from "../quantity-selector";
import { AddToCartButtonProps, Size, Variant } from "@/app/types/add-to-cart-button";
import { Confirm } from "@/app/icons/confirm";
import toast from "react-hot-toast";

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  // Generate all variant permutations
  // function generateVariantPermutations(product: AddToCartButtonProps) {
  //   console.log('product', product)
  //   const { scents, variants } = product;

  //   if (!scents || scents.length === 0) {
  //     return variants.map((variant) => ({
  //       id: variant.id,
  //       size: variant.size,
  //       scent: null,
  //       price: variant.price,
  //     }));
  //   }

  //   const permutations = [];
  //   scents.forEach((scent) => {
  //     variants.forEach((variant) => {
  //       permutations.push({
  //         id: `${variant.id}-${scent.replace(/\s+/g, "-").toLowerCase()}`,
  //         size: variant.size,
  //         scent,
  //         price: variant.price,
  //       });
  //     });
  //   });
  //   return permutations;
  // }

  const { addToCart, quantity, handleQuantityChange } = useCart();

  const hasMultipleVariants = product?.variants?.length
    ? product?.variants?.length > 1
    : false; // Check if the product has multiple size options
  const isSingleVariant = product.variants?.length === 1; // Check if there's only one size option

  // State for the selected variant and scent
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [selectedSize, setSelectedSize] = useState<Size | null>(
    isSingleVariant ? product.variants?.[0] || null : null
  );
  const [selectedScent, setSelectedScent] = useState<string | null>(null);

  // Automatically handle cases where there are no variants or a single variant
  const getselectedSize = () => {
    if (isSingleVariant) {
      return product.variants?.[0];
    }
  
    // Match the selected size and scent with the available variants
    if (selectedSize && selectedScent) {
      return product.variants?.find(
        (variant) =>
          variant.size === selectedSize.size && variant.scent === selectedScent
      );
    }
  
    // Fallback to the manually selected variant (if applicable)
    return selectedSize;
  };
  // const allVariants = generateVariantPermutations(product);

  // const getselectedSize = () => {
  //   return allVariants.find(
  //     (variant) =>
  //       variant.size === selectedSize?.size &&
  //       (!product.scents || variant.scent === selectedScent)
  //   );
  // };

  // Handle selecting a scent
  const handleScentSelect = (scent: string) => {
    console.log("scentttt", scent);
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
  // const handleAddToCart = () => {
  //   const variant = getselectedSize();

  //   if (!variant && hasMultipleVariants) {
  //     console.error("Variant not selected or not found!");
  //     return;
  //   }

  //   addToCart(
  //     product,
  //     variant ? variant.id : null, // Pass variant ID if available, or null if no variants
  //     quantity,
  //     selectedScent
  //   );
  // };

  const handleAddToCart = () => {
    const variant = getselectedSize();
    console.log("--from add to cart---", selectedSize);
    // Check if the product has multiple variants and a variant is not selected
    if (!selectedSize && hasMultipleVariants) {
      toast.error("Please select a size before adding to the cart.");
      return;
    }

    // Check if the product has scents and a scent is not selected
    if (product.scents && product.scents.length > 0 && !selectedScent) {
      toast.error("Please select a scent before adding to the cart.");
      return;
    }

    // Add to cart
    addToCart(
      product,
      selectedSize ? selectedSize : null, // Pass variant ID if available, or null if no variants
      selectedScent ? selectedScent : null,
      quantity
      // selectedScent
    );

    toast.success("Product added to cart!");
  };
  // Attach and clean up the event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log("product---page", product);
  console.log("selectedSize", selectedSize);

  return (
    <>
      {/* Size Selector */}
      {hasMultipleVariants && (
        <div className={styles.sizeSelector}>
          <p>Select Size:</p>
          <div className={styles.sizeSelectorButtonWrapper}>
            {product.sizes?.map((size) => (
              <button
                key={size.size}
                onClick={() => setSelectedSize(size)}
                className={
                  selectedSize?.size === size.size
                    ? styles.selectedButton
                    : styles.button
                }
              >
                <div
                  className={
                    selectedSize?.size === size.size
                      ? styles.selectedCheck
                      : styles.unselectedCheck
                  }
                >
                  {" "}
                  <Confirm />
                </div>

                <span className={styles.variantText}>
                  <span className={styles.variantPrice}>${size.price}</span>
                  <span className={styles.variantSize}>{size.size}</span>
                </span>
              </button>
            ))}
          </div>
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
        //   (hasMultipleVariants && !selectedSize) || // Disable if variant not selected when required
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

// const selectedSizeId = "db5c3c3a-2db0-49f5-b1b2-a6ef335c963d"; // 2oz size
// const selectedScent = "Lavender Vanilla"; // Selected scent
// const quantity = 2; // Adding 2 of this product to the cart

// type AddToCartButtonProps = {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// };
