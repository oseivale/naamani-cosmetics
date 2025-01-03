"use client";
// import QuantitySelector from "../components/quantity-selector";
import { useCart } from "../contexts/cart";
import { Trash } from "../icons/trash";
import styles from "./styles.module.css";
import Link from "next/link";
import { Minus } from "../icons/minus";
import { Add } from "../icons/add";
import Image from "next/image";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    totalItems,
    clearCart,
    totalAmount,
    updateLineItemQuantity,
  } = useCart();

  // const [updatedQuantity, setUpdatedQuantity] = useState(1);

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  // const handleQuantityChange = (quantity: number) => {
  //   setUpdatedQuantity(quantity);
  // };

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
            <Image src={item.image} alt={item.name} width={50} height={50} />
            <div className={styles.cartData}>
              <h2 className={styles.itemName}>{item.name}</h2>
              {item.scent || item.size ? (
                <div className={styles.variantWrapper}>
                  <p>{item.scent}</p>
                  <p>({item.size})</p>
                </div>
              ) : null}

              <p>${item.price.toFixed(2)}</p>

              <div className={styles.removeBtnContainer}>
                {/* <input
              className={styles.quanityInput}
                type="number"
                value={item.quantity}
                min={1}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
              /> */}
                {/* <QuantitySelector
                  onQuantityChange={handleQuantityChange}
                  quantityTest={item.quantity}
                /> */}
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

                {/* <div className={styles.quantity}>
      <button className={styles.quantityBtn} onClick={() =>
                      updateLineItemQuantity(item.id, item.size, Math.max(1, item.quantity - 1), item.scent)
                    }>
        <Minus />
      </button>
    
      <span className={styles.quantityInput}>{item.quantity}</span>
      <button className={styles.quantityBtn} onClick={() =>
                      updateLineItemQuantity(item.id, item.size, item.quantity + 1, item.scent)
                    }>
        <Add />
      </button>
    </div> */}

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
        <button className={styles.clearCartBtn} onClick={clearCart}>
          Clear Cart
        </button>
        <Link
          href={"/checkout"}
          className={styles.proceedToCheckoutBtn}
          style={{ marginLeft: "1rem" }}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
