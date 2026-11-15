import Link from "next/link";
import styles from "./projects.module.css";
import AllProjects from "./AllProjects";

const index = () => {
  return (
    <section id="projects" className={styles.section}>
      <span className={styles.blob}></span>
      <div className={styles.sectionHead}>
        <h3>Projects</h3>
        <p>
          Production full stack work — open a case study for stack, results and live links.
        </p>
        <Link href="/projects" className={styles.allProjectsLink}>
          Browse all project pages →
        </Link>
      </div>
      <AllProjects />
    </section>
  );
};

export default index;
