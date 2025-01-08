"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { Bag } from "@/app/icons/bag";
import Link from "next/link";
import { NaamaniMain } from "@/app/logos/naamani-main";
import { Hamburger } from "@/app/icons/hamburger";
import { useCart } from "@/app/contexts/cart";
import { Trash } from "@/app/icons/trash";
import Image from "next/image";
import { Shipping } from "@/app/icons/shipping";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const {
    cart,
    isCartDrawerOpen,
    triggerCartDrawerOpen,
    triggerCartDrawerClose,
    totalItems,
    totalAmount,
  } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <Shipping />
        <h3>Free shipping on CAD $50+</h3>
      </div>
      <div className={styles.container}>
        {/* Hamburger Menu - Mobile Only */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`${styles.hamburger} ${styles.mobileOnly}`}
        >
          {/* ☰ */}
          <Hamburger />
        </button>

        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <NaamaniMain />
          </Link>
        </div>

        {/* Navigation Links - Desktop Only */}
        <nav className={`${styles.navLinks} ${styles.desktopOnly}`}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/products" className={styles.navLink}>
            Shop
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        {/* Cart Icon */}
        <button onClick={triggerCartDrawerOpen} className={styles.cart}>
          {/* <Cart /> */}
          <Bag />
          <div className={styles.totalItems}>{totalItems}</div>
        </button>
      </div>

      {/* Navigation Drawer (Left) */}
      <div
        className={`${styles.drawerOverlay} ${isNavOpen ? styles.active : ""}`}
        onClick={() => setIsNavOpen(false)}
      >
        <div
          className={`${styles.drawer} ${styles.drawerLeft} ${
            isNavOpen ? styles.active : ""
          }`}
        >
          <button
            className={styles.closeButton}
            onClick={() => setIsNavOpen(false)}
          >
            ✕
          </button>
          <nav className={`${styles.navLinks}`}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/products" className={styles.navLink}>
              Shop
            </Link>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Cart Drawer (Right) */}
      <div
        className={`${styles.drawerOverlay} ${
          isCartDrawerOpen ? styles.active : ""
        }`}
        onClick={triggerCartDrawerClose}
      >
        <div
          className={`${styles.drawer} ${styles.drawerRight} ${
            isCartDrawerOpen ? styles.active : ""
          }`}
        >
          <button
            className={styles.closeButton}
            onClick={triggerCartDrawerClose}
          >
            ✕
          </button>
          <h2>Your Cart</h2>
          {!cart.length && <p>Your cart is empty.</p>}
          {cart.length > 0 ? (
            <div className={styles.cartContent}>
              <ul className={styles.cartItemsWrapper}>
                {cart.map((item) => {
                  return (
                    <li
                      className={styles.cartItem}
                      key={`${item.id}--${item.size}-${item.scent}`}
                    >
                      <Image
                        className={styles.cartItemImage}
                        src={item.image}
                        height={1000}
                        width={1000}
                        alt={"#"}
                      />
                      {cart.length && (
                        <div className={styles.itemWrapper}>
                          <div>
                            {" "}
                            <p className={styles.itemName}>{item?.name}</p>
                            <span className={styles.quantityTotal}>
                              x {item.quantity}
                            </span>
                            {/* <div className={styles.inputWrapper}>
                            <input
                          className={styles.quantityInput}
                            type="number"
                            value={item.quantity}
                            min={1}
                            onChange={(e) =>
                              updateQuantity(item.id, Number(e.target.value))
                            }
                          />
                          </div> */}
                            <button className={styles.removeBtn}>
                              <Trash />
                            </button>
                          </div>

                          <div className={styles.variantWrapper}>
                            {item.scent && <p>{item.scent}</p>}
                            {item.size && <p>({item.size})</p>}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <h2 className={styles.totalText}>
                Total: ${totalAmount.toFixed(2)}*
              </h2>
              <p className={styles.shippingText}>
                *Shipping calculated at checkout
              </p>
              {cart.length > 0 ? (
                <Link className={styles.viewCartBtn} href={"/cart"}>
                  View Cart
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
