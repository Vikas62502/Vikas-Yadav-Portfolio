import Link from "next/link";
import Service from "./Service";
import styles from "./services.module.css";
import { ServiceData } from "@/app/data/ServiceData";

const index = () => {
  return (
    <section id="services" className={styles.section}>
      <span className={styles.blob}></span>
      <div className={styles.sectionHead}>
        <h3>What I Do</h3>
        <p>
          From architecture to deployment — how I can help your team ship.
        </p>
      </div>
      <div className={styles.services}>
        {ServiceData.map((service, index) => (
          <Service
            key={index}
            heading={service.heading}
            subHeading={service.subHeading}
          />
        ))}
      </div>
      <div className={styles.contactMobile}>
        <Link href="#contact">
          <span>{"Let's Discuss"}</span>
        </Link>
      </div>
    </section>
  );
};

export default index;