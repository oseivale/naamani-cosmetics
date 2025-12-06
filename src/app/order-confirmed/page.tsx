"use client";

import Link from "next/link";
import styles from "./styles.module.css";

interface OrderConfirmationPageProps {
    searchParams: {
        orderNumber?: string;
        total?: string;
        email?: string;
    };
}

export default function OrderConfirmationPage({
    searchParams,
}: OrderConfirmationPageProps) {
    const orderNumber = searchParams.orderNumber || "N/A";
    const total = searchParams.total || "";
    const email = searchParams.email || "";

    return (
        <main className={styles.page}>
            <div className={styles.card}>
                <div className={styles.badge}>Thank you!</div>
                <h1 className={styles.heading}>Your order has been submitted</h1>
                <p className={styles.lead}>
                    We’ve received your order and sent you an email with payment
                    instructions.
                </p>

                <div className={styles.infoBlock}>
                    <div className={styles.infoRow}>
                        <span className={styles.label}>Order #</span>
                        <span className={styles.value}>{orderNumber}</span>
                    </div>

                    {total && (
                        <div className={styles.infoRow}>
                            <span className={styles.label}>Order Total</span>
                            <span className={styles.value}>${total}</span>
                        </div>
                    )}

                    {email && (
                        <div className={styles.infoRow}>
                            <span className={styles.label}>Confirmation sent to</span>
                            <span className={styles.value}>{email}</span>
                        </div>
                    )}
                </div>

                <section className={styles.notice}>
                    <h2 className={styles.noticeTitle}>Next steps</h2>
                    <p>
                        Your order is currently{" "}
                        <strong>pending payment via Interac e-Transfer</strong>.
                    </p>
                    <p className={styles.noticeText}>
                        Please check your email for the e-transfer details. Your order will
                        be processed once your payment has been received and confirmed.
                    </p>
                    <p className={styles.noticeHighlight}>
                        Remember to include your order number{" "}
                        <strong>({orderNumber})</strong> in the e-transfer message so we can
                        match your payment to your order.
                    </p>
                </section>

                <div className={styles.actions}>
                    <Link href="/products" className={styles.primaryButton}>
                        Back to Shop
                    </Link>
                    <Link href="/contact" className={styles.secondaryButton}>
                        Need help? Contact us
                    </Link>
                </div>
            </div>
        </main>
    );
}
