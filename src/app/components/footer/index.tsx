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
          {/* <Image
            src="/images/logo.png" // Replace with your logo path
            alt="Naamani Cosmetics Logo"
            width={150}
            height={50}
          /> */}
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
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/facebook-icon.png" // Replace with your Facebook icon
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/twitter-icon.png" // Replace with your Twitter icon
                alt="Twitter"
                width={24}
                height={24}
              />
            </a> */}
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <Image
                src="/images/instagram-icon.png" // Replace with your Instagram icon
                alt="Instagram"
                width={24}
                height={24}
              /> */}
              <Instagram />
            </Link>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/linkedin-icon.png" // Replace with your LinkedIn icon
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a> */}
          </div>
        </div>
      </div>
      <p className={styles.copyText}>
        © {new Date().getFullYear()} Naamani Cosmetics. All rights reserved.
      </p>
    </footer>
  );
}
