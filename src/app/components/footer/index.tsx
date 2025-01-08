import { Instagram } from "@/app/icons/instagram";
import styles from "./styles.module.css";
import Link from "next/link";
import { NaamaniSecond } from "@/app/logos/naamani-second";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <NaamaniSecond />
        </div>

        {/* Quick Links Section */}
        <div className={styles.linksSection}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            {/* <li>
              <Link href="/faq">FAQ</Link>
            </li> */}
            <li>
              <Link href="/ingredient-glossary">Ingredient Glossary</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
      <p className={styles.copyText}>
        © {new Date().getFullYear()} Naamani Cosmetics. All rights reserved.
      </p>
    </footer>
  );
}
