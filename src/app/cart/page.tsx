"use client";
import { useCart } from "../contexts/cart";
import { Trash } from "../icons/trash";
import styles from "./styles.module.css";
import Link from "next/link";
import { Minus } from "../icons/minus";
import { Add } from "../icons/add";
import Image from "next/image";
import { CartAdd } from "../icons/cart-add";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    totalItems,
    clearCart,
    totalAmount,
    updateLineItemQuantity,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCartText}>
        <p>Your cart is empty.</p>
        <Link className={styles.backToProducts} href={"/products"}>
          Back to Shop
        </Link>
      </div>
    );
  }

  console.log("cart", cart);
  return (
    <div>
      <div className={styles.cartContainer} style={{ padding: "2rem" }}>
        <h1>Your Cart</h1>
        {cart.map((item) => (
          <div
            className={styles.cartItems}
            key={`${item.id}--${item.size}-${item.scent}`}
            style={{ marginBottom: "1rem" }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={1000}
              height={1000}
            />
            <div className={styles.cartData}>
              <h2 className={styles.itemName}>{item.name}</h2>
              {item.scent || item.size ? (
                <div className={styles.variantWrapper}>
                  <p>{item.scent}</p>
                  <p>({item.size})</p>
                </div>
              ) : null}

              <p>${item.price}</p>

              <div className={styles.removeBtnContainer}>
                <div className={styles.quantity}>
                  <button
                    className={styles.quantityBtn}
                    onClick={() =>
                      updateLineItemQuantity(
                        item.id,
                        Math.max(1, item.quantity - 1),
                        item.size,
                        item.scent
                      )
                    }
                  >
                    <Minus />
                  </button>
                  <span className={styles.quantityInput}>{item.quantity}</span>
                  <button
                    className={styles.quantityBtn}
                    onClick={() =>
                      updateLineItemQuantity(
                        item.id,
                        item.quantity + 1,
                        item.size,
                        item.scent
                      )
                    }
                  >
                    <Add />
                  </button>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash />
                </button>
              </div>
            </div>
          </div>
        ))}
        <h2 className={styles.total}>Total: ${totalAmount.toFixed(2)}</h2>
        <h3 className={styles.totalItems}>Item Count: {totalItems}</h3>
        <p className={styles.shippingDetails}>
          Shipping will be calculated at checkout.
        </p>
        <div className={styles.checkoutBtnWrapper}>
          <button className={styles.clearCartBtn} onClick={clearCart}>
            Clear Cart
          </button>

          <Link href={"/products"} className={styles.backToShopBtn}>
            Back to Shop <CartAdd />
          </Link>
          <Link href={"/checkout"} className={styles.proceedToCheckoutBtn}>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
