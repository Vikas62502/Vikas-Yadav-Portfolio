import styles from "./techStack.module.css";
import { TechStack } from "@/app/data/Skills";

const index = () => {
  return (
    <section id="stack" className={styles.section}>
      <span className={styles.blob}></span>
      <div className={styles.sectionHead}>
        <h3>Tech Stack</h3>
        <p>The tools I use to take a product from the browser to the database to the cloud.</p>
      </div>
      <div className={styles.grid}>
        {TechStack.map((category, index) => (
          <div key={category.title} className={styles.card}>
            <span className={styles.cardIndex}>{`// 0${index + 1}`}</span>
            <h4>{category.title}</h4>
            <p>{category.description}</p>
            <div className={styles.chips}>
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
