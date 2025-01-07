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
        backgroundImage="https://images.unsplash.com/photo-1550758103-d83e024d38ef?q=80&w=3294&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // backgroundImage="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div className={styles.contactHeader}>
          <h1>Curious about Naamani Cosmetics?</h1>
          <p>We'd love to hear from you!</p>
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
                <p>damankconsulting@yahoo.ca</p>
              </div>
            </div>
          </div>
        </div>
      </PageBanner>
    </div>
  );
}
