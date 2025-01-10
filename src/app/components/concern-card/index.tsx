import Link from "next/link";
import styles from "./styles.module.css";
import { ConcernCardProps } from "@/app/types/concern-card";



const ConcernCard: React.FC<ConcernCardProps> = ({
  label,
  imageUrl,
  href,
  bgSize = "cover",
  bgPosition = "center 45%",
}) => {
  return (
    <Link
      href={href}
      className={styles.concernCard}
      style={{
        backgroundSize: bgSize,
        backgroundPosition: bgPosition,
        backgroundImage: `linear-gradient(to top, rgba(94, 50, 113, 0.7), rgba(94, 50, 113, 0.7)), url(${imageUrl})`,
      }}
    >
      <span className={styles.concernLabel}>{label}</span>
    </Link>
  );
};

export default ConcernCard;