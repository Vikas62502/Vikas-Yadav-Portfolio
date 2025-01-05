
import styles from "./projects.module.css";
import { ProjectType } from "@/app/data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Project: FC<ProjectType> = ({ id, title, description, images, liveLink, TechStack }) => {
  return (
    <Link href={liveLink} target="_blank">
      <div key={id} className={`${styles.projectBox} hover:shadow-xl hover:scale-105 transition-transform duration-300`}>
        <div className={styles.aboutProject}>
          <div className={styles.projectHeader}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <p className={`font-bold text-black`}>Tech Stack : {TechStack}</p>
          </div>
          <div className={styles.projectButtons}>
            <Link href={liveLink} className={styles.buttonLink} target="_blank">
              <span>Live Link</span>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageBox}>
            <Image src={images[0].url} alt={title} width={100} height={100} quality={100} unoptimized={true} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;