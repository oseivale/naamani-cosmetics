"use client";

import styles from "./styles.module.css";
import { Minus } from "@/app/icons/minus";
import { Add } from "@/app/icons/add";
import { useCart } from "@/app/contexts/cart";
import { QuantitySelectorProps } from "@/app/types/quantity-selector";

export default function QuantitySelector({
  quantityTest,
}: QuantitySelectorProps) {
  const { handleIncrease, handleDecrease } = useCart();

  return (
    <div className={styles.quantity}>
      <button className={styles.quantityBtn} onClick={handleDecrease}>
        <Minus />
      </button>
      <input
        className={styles.quantityInput}
        type="text"
        value={quantityTest}
        readOnly
      />
      <button className={styles.quantityBtn} onClick={handleIncrease}>
        <Add />
      </button>
    </div>
  );
}
