import type { Metadata } from "next";
import Link from "next/link";
import { ProjectsData, getProjectSlug } from "@/app/data/ProjectsData";
import styles from "./projectsPage.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full stack projects by Vikas Yadav — FASTag platforms, payment systems, Next.js apps, Node.js backends, React Native, PostgreSQL and AWS.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Vikas Yadav",
    description:
      "Production full stack work: Chairbord FASTag, Get RC portal, Job Search Accelerator, and more.",
    url: "https://vikasyadav.online/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Selected work</p>
        <h1>Projects by Vikas Yadav</h1>
        <p className={styles.lede}>
          Production full stack systems — React, Next.js, React Native, Node.js, PostgreSQL and AWS.
          Built for real users, payments and banking workflows.
        </p>
        <div className={styles.actions}>
          <Link href="/#contact" className={styles.primary}>Hire Me</Link>
          <Link href="/Vikas_Yadav_Full_Stack_Resume.pdf" className={styles.secondary} target="_blank">
            Resume
          </Link>
        </div>
      </div>

      <div className={styles.list}>
        {ProjectsData.map((project) => {
          const slug = getProjectSlug(project);
          return (
            <article key={project.id} className={styles.card}>
              <div className={styles.cardTop}>
                {project.associatedWith && <span className={styles.badge}>@ {project.associatedWith}</span>}
                <h2>
                  <Link href={`/projects/${slug}`}>{project.title}</Link>
                </h2>
                <p>{project.seoSummary ?? project.description}</p>
              </div>
              <div className={styles.tags}>
                {project.tags.slice(0, 6).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link href={`/projects/${slug}`} className={styles.caseStudy}>
                View case study →
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}
