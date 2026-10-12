"use client"

import { motion } from "framer-motion";
import styles from "./impact.module.css";
import { Impact } from "@/app/data/AboutData";

const index = () => {
  return (
    <section id="impact" className={styles.section}>
      <div className={styles.sectionHead}>
        <span className={styles.eyebrow}>{"// impact"}</span>
        <h3>Results, not just code</h3>
        <p>A snapshot of what I&apos;ve delivered in production.</p>
      </div>
      <div className={styles.grid}>
        {Impact.map((item, i) => (
          <motion.div
            key={item.title}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          >
            <span className={styles.metric}>{item.metric}</span>
            <h4>{item.title}</h4>
            <p>{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default index;
