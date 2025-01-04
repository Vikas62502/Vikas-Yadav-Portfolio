import styles from "./contact.module.css"
import Link from "next/link";

const ContactInfo = () => {
  const contactInfo = {
    email: "vikasyadav62502@gmail.com",
    phone: "+918178624530",
    address: "Faridabad, Haryana, India",
    linkedin: "https://www.linkedin.com/in/vikasyadav62/",
    gitHub: "https://github.com/Vikas62502",
  }

  return (
    <div className={styles.contactInfoBox}>
      <div className={styles.infoBox}>
        <div className={styles.contactHeader}>
          <h2>Get in touch</h2>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          <p>{contactInfo.address}</p>
        </div>
        <div className={styles.contactFooter}>
          <Link href={contactInfo.linkedin}>
            <span>LinkedIn</span>
          </Link>
          <Link href={contactInfo.gitHub}>
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;