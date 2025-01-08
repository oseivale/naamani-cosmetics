"use client";

import { useCart } from "@/app/contexts/cart";
import styles from "./styles.module.css";
import { VariantButtonProps } from "@/app/types/variant-button";

export default function VariantButton({ variant }: VariantButtonProps) {
  const { handleSizeChange, size } = useCart();

  const isActive = size === variant;

  return (
    <button
      className={`${styles.variant} ${isActive ? styles.active : ""}`}
      onClick={() => handleSizeChange(variant)}
    >
      {variant}
    </button>
  );
}
