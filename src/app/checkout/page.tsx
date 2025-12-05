"use client";

import { FormEvent, useState } from "react";
import { useCart } from "../contexts/cart";
import styles from "./styles.module.css"; // you'll create this CSS module
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, totalAmount, totalItems, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!cart || cart.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>Your cart is empty.</p>
        <Link href="/products" className={styles.backToShop}>
          Back to Shop
        </Link>
      </div>
    );
  }

  // 🔢 Adjust these as needed (tax/shipping rules for Ontario, etc.)
  const subtotal = Number(totalAmount || 0);
  const tax = +(subtotal * 0.13).toFixed(2); // example 13% HST
  const shipping = 0; // for now, or replace with your logic
  const grandTotal = +(subtotal + tax + shipping).toFixed(2);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      cart,
      totals: {
        subtotal,
        tax,
        shipping,
        grandTotal,
      },
      customer: {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      },
      shippingAddress: {
        line1: formData.get("shippingLine1"),
        line2: formData.get("shippingLine2"),
        city: formData.get("shippingCity"),
        province: formData.get("shippingProvince"),
        postalCode: formData.get("shippingPostalCode"),
        country: formData.get("shippingCountry"),
      },
      billingAddress: {
        sameAsShipping: formData.get("billingSameAsShipping") === "on",
        line1: formData.get("billingLine1"),
        line2: formData.get("billingLine2"),
        city: formData.get("billingCity"),
        province: formData.get("billingProvince"),
        postalCode: formData.get("billingPostalCode"),
        country: formData.get("billingCountry"),
      },
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit order");
      }

      const data = await res.json();

      // 🧹 Clear cart locally
      clearCart();

      alert(
        `Thank you! Your order has been submitted.\n\nOrder #: ${
          data.orderNumber
        }\n\nPlease check your email for payment instructions.\n\nReminder: your order is PENDING until Interac e-Transfer payment is received.`
      );

      // Optional: redirect to a thank-you page instead of alert
      // router.push(`/order-confirmation?order=${data.orderNumber}`);
    } catch (error) {
      console.error(error);
      alert(
        "Sorry, there was an error submitting your order. Please try again or contact us."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Checkout</h1>

        {/* 🔔 Very clear manual payment notice */}
        <section className={styles.notice}>
          <p className={styles.noticeTitle}>Important</p>
          <p>
            Naamani Cosmetics uses{" "}
            <strong>Interac e-Transfer (sent separately)</strong> for payment.
            After you submit this form, you&apos;ll receive an email with your
            order number and payment instructions.
          </p>
          <p className={styles.noticeHighlight}>
            Your order is <strong>pending</strong> and will not be processed
            until your e-transfer payment is received.
          </p>
        </section>

        {/* Summary */}
        <section className={styles.summary}>
          <h2>Order Summary</h2>
          <ul className={styles.itemsList}>
            {cart.map((item) => (
              <li key={`${item.id}--${item.size}-${item.scent}`}>
                <div className={styles.itemLeft}>
                  <p className={styles.itemName}>{item.name}</p>
                  {(item.scent || item.size) && (
                    <p className={styles.itemVariant}>
                      {item.scent} {item.size && `(${item.size})`}
                    </p>
                  )}
                  <p className={styles.itemQty}>Qty: {item.quantity}</p>
                </div>
                <p className={styles.itemPrice}>
                  ${(Number(item.price) * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <div className={styles.totals}>
            <div>
              <span>Items</span>
              <span>{totalItems}</span>
            </div>
            <div>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div>
              <span>Tax (est.)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div>
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className={styles.grandTotal}>
              <span>Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </section>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Contact */}
          <section>
            <h2 className={styles.sectionHeading}>Contact Details</h2>
            <div className={styles.gridTwo}>
              <div>
                <label htmlFor="firstName">First Name*</label>
                <input required id="firstName" name="firstName" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name*</label>
                <input required id="lastName" name="lastName" />
              </div>
              <div>
                <label htmlFor="email">Email*</label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone (optional)</label>
                <input id="phone" name="phone" autoComplete="tel" />
              </div>
            </div>
          </section>

          {/* Shipping */}
          <section>
            <h2 className={styles.sectionHeading}>Shipping Address</h2>
            <div className={styles.gridTwo}>
              <div className={styles.fullWidth}>
                <label htmlFor="shippingLine1">Address Line 1*</label>
                <input required id="shippingLine1" name="shippingLine1" />
              </div>
              <div className={styles.fullWidth}>
                <label htmlFor="shippingLine2">Address Line 2</label>
                <input id="shippingLine2" name="shippingLine2" />
              </div>
              <div>
                <label htmlFor="shippingCity">City*</label>
                <input required id="shippingCity" name="shippingCity" />
              </div>
              <div>
                <label htmlFor="shippingProvince">Province*</label>
                <input required id="shippingProvince" name="shippingProvince" />
              </div>
              <div>
                <label htmlFor="shippingPostalCode">Postal Code*</label>
                <input
                  required
                  id="shippingPostalCode"
                  name="shippingPostalCode"
                />
              </div>
              <div>
                <label htmlFor="shippingCountry">Country*</label>
                <input
                  required
                  id="shippingCountry"
                  name="shippingCountry"
                  defaultValue="Canada"
                />
              </div>
            </div>
          </section>

          {/* Billing */}
          <section>
            <h2 className={styles.sectionHeading}>Billing Address</h2>
            <label className={styles.checkboxRow}>
              <input
                type="checkbox"
                name="billingSameAsShipping"
                defaultChecked
              />
              <span>Billing address is the same as shipping</span>
            </label>
            <p className={styles.helperText}>
              If different, uncheck and fill in your billing details below.
            </p>

            <div className={styles.gridTwo}>
              <div className={styles.fullWidth}>
                <label htmlFor="billingLine1">Address Line 1</label>
                <input id="billingLine1" name="billingLine1" />
              </div>
              <div className={styles.fullWidth}>
                <label htmlFor="billingLine2">Address Line 2</label>
                <input id="billingLine2" name="billingLine2" />
              </div>
              <div>
                <label htmlFor="billingCity">City</label>
                <input id="billingCity" name="billingCity" />
              </div>
              <div>
                <label htmlFor="billingProvince">Province</label>
                <input id="billingProvince" name="billingProvince" />
              </div>
              <div>
                <label htmlFor="billingPostalCode">Postal Code</label>
                <input id="billingPostalCode" name="billingPostalCode" />
              </div>
              <div>
                <label htmlFor="billingCountry">Country</label>
                <input id="billingCountry" name="billingCountry" />
              </div>
            </div>
          </section>

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? "Submitting Order..." : "Submit Order"}
          </button>
          <p className={styles.finePrint}>
            By submitting, you&apos;ll receive an email with your order details
            and instructions to pay by Interac e-Transfer. Your order will be
            processed only after payment is received.
          </p>
        </form>
      </div>
    </main>
  );
}
