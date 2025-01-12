import Link from "next/link";
import ContactForm from "../components/form";
import PageBanner from "../components/page-wrapper";
import { Email } from "../icons/email";
import { Location } from "../icons/location";
import { Phone } from "../icons/phone";
import styles from "./styles.module.css";

export default function Contact() {
  return (
    <div>
      <PageBanner
        title={"Contact"}
        backgroundImage={"/images/naamani-shop-bg-img.avif"}
      >
        <div className={styles.contactHeader}>
          <h1>Curious about Naamani Cosmetics?</h1>
          <p>{`We'd love to hear from you!`}</p>
        </div>
        <div className={styles.contact}>
          <div>
            <ContactForm />
          </div>
          <div className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <div>
                <Location />
              </div>
              <div>
                <h2>Our Location</h2>
                <p>Innisfil, ON</p>
              </div>
            </div>
            <div className={styles.sidebarCard}>
              <div>
                <Phone />
              </div>
              <div>
                <h2>Give us a call</h2>
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className={styles.sidebarCard}>
              <div>
                <Email />
              </div>
              <div>
                <h2>Send us an email</h2>
                <Link className={styles.emailLink} href={"mailto:damankconsulting@yahoo.ca"}>damankconsulting@yahoo.ca</Link>
              </div>
            </div>
          </div>
        </div>
      </PageBanner>
    </div>
  );
}
