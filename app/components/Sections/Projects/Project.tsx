
import styles from "./projects.module.css";
import { ProjectType } from "@/app/data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Project: FC<ProjectType> = ({ id, title, description, images, liveLink, gitHubLink, TechStack, highlights, associatedWith, tags }) => {
  return (
    <div key={id} className={`${styles.projectBox} hover:shadow-xl hover:scale-[1.02] transition-transform duration-300`}>
      <div className={styles.aboutProject}>
        <div className={styles.projectHeader}>
          {associatedWith && <span className={styles.badge}>@ {associatedWith}</span>}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          {highlights && highlights.length > 0 && (
            <ul className={styles.highlights}>
              {highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <p className={styles.techStack}><span>Tech Stack:</span> {TechStack}</p>
        </div>
        <div className={styles.projectButtons}>
          {liveLink && (
            <Link href={liveLink} className={`${styles.buttonLink} ${styles.primaryLink}`} target="_blank">
              <span>Live Link ↗</span>
            </Link>
          )}
          {gitHubLink && (
            <Link href={gitHubLink} className={styles.buttonLink} target="_blank">
              <span>GitHub</span>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.imageContainer}>
        {images.length > 0 ? (
          <div className={styles.imageBox}>
            <Image src={images[0].url} alt={title} width={100} height={100} quality={100} unoptimized={true} />
          </div>
        ) : (
          <div className={styles.codeWindow}>
            <div className={styles.codeWindowBar}>
              <span></span><span></span><span></span>
            </div>
            <pre>
              <code>
                <span className={styles.codeKeyword}>const</span> project = {"{\n"}
                {"  "}name: <span className={styles.codeString}>{`"${title}"`}</span>,{"\n"}
                {"  "}stack: [{"\n"}
                {tags.map((tag) => (
                  <React.Fragment key={tag}>
                    {"    "}<span className={styles.codeString}>{`"${tag}"`}</span>,{"\n"}
                  </React.Fragment>
                ))}
                {"  "}],{"\n"}
                {"  "}status: <span className={styles.codeString}>{`"shipped"`}</span>,{"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
