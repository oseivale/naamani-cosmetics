// pages/404.tsx
import Link from "next/link";
import styles from "./page.module.css";
import { NotFound } from "./icons/not-found";

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h3 className={styles.subtitle}>Page Not Found</h3>
      <p className={styles.description}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link className={styles.homeLink} href="/">
        Go Back to Naamani Home
      </Link>
    </div>
  );
};

export default Custom404;
