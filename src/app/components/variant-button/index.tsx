"use client";

import { useCart } from "@/app/contexts/cart";
// import { useVariant } from "../contexts/VariantContext";
import styles from "./styles.module.css";
import { useState } from "react";

type VariantButtonProps = {
  variant: string;
};

export default function VariantButton({ variant }: VariantButtonProps) {
    // const { selectedVariant, setSelectedVariant } = useVariant();
    // const  [isActive, setIsActive] = useState(false)

    // const isActive = selectedVariant === variant;
  

  //   const handleClick = () => { 
  //     setSelectedVariant(variant);
  //   };
  const { handleSizeChange, size } =
  useCart();

  const isActive = size === variant

  // const test = () => {
  //   handleSizeChange(variant)
  //   setIsActive(!isActive)
  // }

  return (
    <button
      className={`${styles.variant} ${isActive ? styles.active : ""}`}
      onClick={() => handleSizeChange(variant)}
        // className={`${styles.variantButton} ${isActive ? styles.active : ""}`}
      //   onClick={handleClick}
    >
      {variant}
    </button>
  );
}
