"use client";

import { useCart } from "@/app/contexts/cart";
import { CartAdd } from "@/app/icons/cart-add";
import styles from "./styles.module.css";
import QuantitySelector from "../quantity-selector";

type AddToCartButtonProps = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function AddToCartButton({
  id,
  name,
  price,
  image,
}: AddToCartButtonProps) {
  const {
    addToCart,
    cart,
    quantity,
    size,
    scent,
    handleQuantityChange

  } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (quantity: number) => {
//     setQuantity(quantity);
//   };

  console.log("cart!!", cart);

  return (
    <>
      <p className={styles.quantityLabel}>Select quantity</p>
      <QuantitySelector onQuantityChange={handleQuantityChange} quantityTest={quantity} />
      <button
        className={styles.addToCartButton}
        onClick={() => addToCart({ id, name, price, image, quantity, size, scent })}
      >
        <CartAdd />
        Add to Cart
      </button>
    </>
  );
}
