"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import styles from "./contact.module.css";

const contactInfo = {
  email: "vikasyadav62502@gmail.com",
  phone: "+91 81786 24530",
  phoneHref: "+918178624530",
  address: "New Delhi, India · Open to Relocation",
  linkedin: "https://www.linkedin.com/in/vikasyadav62/",
  gitHub: "https://github.com/Vikas62502",
};

const ContactInfo = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
    <div className={styles.infoColumn}>
      <div className={styles.availabilityCard}>
        <span className={styles.statusDot}></span>
        <div>
          <p className={styles.availabilityTitle}>Available for new opportunities</p>
          <p className={styles.availabilityText}>Full-time Full Stack / Backend roles · Remote or on-site</p>
        </div>
      </div>

      <div className={styles.infoCard}>
        <FaEnvelope className={styles.infoIcon} />
        <div className={styles.infoBody}>
          <span className={styles.fieldLabel}>email</span>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </div>
        <button type="button" onClick={copyEmail} className={styles.copyButton}>
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>

      <a href={`tel:${contactInfo.phoneHref}`} className={styles.infoCard}>
        <FaPhoneAlt className={styles.infoIcon} />
        <div className={styles.infoBody}>
          <span className={styles.fieldLabel}>phone</span>
          <span>{contactInfo.phone}</span>
        </div>
      </a>

      <div className={styles.infoCard}>
        <FaMapMarkerAlt className={styles.infoIcon} />
        <div className={styles.infoBody}>
          <span className={styles.fieldLabel}>location</span>
          <span>{contactInfo.address}</span>
        </div>
      </div>

      <div className={styles.quickLinks}>
        <Link href={contactInfo.linkedin} target="_blank" className={styles.quickLink}>
          <FaLinkedin /> LinkedIn
        </Link>
        <Link href={contactInfo.gitHub} target="_blank" className={styles.quickLink}>
          <FaGithub /> GitHub
        </Link>
        <Link href="./Vikas_Yadav_Full_Stack_Resume.pdf" target="_blank" download className={`${styles.quickLink} ${styles.quickLinkPrimary}`}>
          <FaFileDownload /> Resume
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
