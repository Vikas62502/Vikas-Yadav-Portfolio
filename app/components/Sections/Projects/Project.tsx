
import styles from "./projects.module.css";
import { ProjectType, getProjectSlug } from "@/app/data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const JobPreview = () => (
  <div className={styles.jobPreview}>
    <div className={styles.jobPreviewBar}>
      <span className={styles.jobPreviewLogo}>JSA</span>
      <div>
        <p>Job Search Accelerator</p>
        <small>12 matches · 3 in progress</small>
      </div>
    </div>
    <div className={styles.jobCard}>
      <div>
        <strong>Senior Full Stack Engineer</strong>
        <span>Remote · Next.js · Node.js</span>
      </div>
      <em>94% match</em>
    </div>
    <div className={styles.jobCard}>
      <div>
        <strong>Backend Engineer</strong>
        <span>Bengaluru · PostgreSQL · AWS</span>
      </div>
      <em>88% match</em>
    </div>
    <div className={styles.jobCard}>
      <div>
        <strong>Full Stack Developer</strong>
        <span>New Delhi · React · TypeScript</span>
      </div>
      <em>81% match</em>
    </div>
  </div>
);

const Project: FC<ProjectType> = (project) => {
  const {
    id,
    title,
    description,
    images,
    liveLink,
    gitHubLink,
    TechStack,
    highlights,
    associatedWith,
    tags,
    preview,
  } = project;
  const slug = getProjectSlug(project);

  return (
    <div key={id} className={`${styles.projectBox} hover:shadow-xl hover:scale-[1.02] transition-transform duration-300`}>
      <div className={styles.aboutProject}>
        <div className={styles.projectHeader}>
          {associatedWith && <span className={styles.badge}>@ {associatedWith}</span>}
          <h2 className={styles.title}>
            <Link href={`/projects/${slug}`}>{title}</Link>
          </h2>
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
          <Link href={`/projects/${slug}`} className={`${styles.buttonLink} ${styles.primaryLink}`}>
            <span>Case Study</span>
          </Link>
          {liveLink && (
            <Link href={liveLink} className={styles.buttonLink} target="_blank">
              <span>Live ↗</span>
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
            <Image
              src={images[0].url}
              alt={`${title} — full stack project by Vikas Yadav`}
              width={100}
              height={100}
              quality={100}
              unoptimized={true}
            />
          </div>
        ) : preview === "jobs" ? (
          <JobPreview />
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
