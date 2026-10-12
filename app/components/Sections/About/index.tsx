import styles from "@/app/components/Sections/About/about.module.css";
import { AboutData, AboutHeadline, Education } from "@/app/data/AboutData";

const index = () => {
  return (
    <div id="about" className={styles.section}>
      <div className={styles.headingText}>
        <h3>About Me</h3>
      </div>
      <div className={styles.description}>
        <p>{AboutHeadline}</p>
      </div>
      <div className={styles.details}>
        <p>{AboutData}</p>
      </div>
      <div className={styles.education}>
        <span className={styles.educationLabel}>Education</span>
        <div className={styles.educationRow}>
          <div>
            <p className={styles.institute}>{Education.institute}</p>
            <p>{Education.degree} · {Education.score}</p>
          </div>
          <div className={styles.educationMeta}>
            <p>{Education.duration}</p>
            <p>{Education.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
