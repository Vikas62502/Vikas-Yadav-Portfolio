import styles from "@/app/components/Sections/Experience/experience.module.css";
import ExperienceDetails from "./ExperienceDetails";
import { experienceData } from "@/app/data/ExperienceData";


const index = () => {



  return (
    <div id="experience" className={styles.section}>
      <span className={styles.blob}></span>
      <div className={styles.headingText}>
        <h3>Experience</h3>
        <p>2+ years shipping production systems across the full stack. Tap a role to see the details.</p>
      </div>
      {
        experienceData.map((data) => (
          <ExperienceDetails key={data.id} {...data} />
        ))
      }
    </div>
  );
};

export default index;