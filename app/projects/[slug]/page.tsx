import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ProjectsData,
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectSlug,
} from "@/app/data/ProjectsData";
import styles from "../projectsPage.module.css";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project not found" };

  const title = project.title;
  const description =
    project.seoSummary ??
    `${project.title} — full stack project by Vikas Yadav using ${project.TechStack ?? project.tags.join(", ")}.`;
  const url = `https://vikasyadav.online/projects/${getProjectSlug(project)}`;
  const image = project.images[0]?.url;

  return {
    title,
    description,
    alternates: { canonical: `/projects/${getProjectSlug(project)}` },
    openGraph: {
      title: `${title} | Vikas Yadav`,
      description,
      url,
      type: "article",
      images: image ? [{ url: image, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Vikas Yadav`,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const slug = getProjectSlug(project);
  const related = ProjectsData.filter((item) => item.id !== project.id).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.seoSummary ?? project.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `https://vikasyadav.online/projects/${slug}`,
    image: project.images[0]?.url,
    author: {
      "@type": "Person",
      name: "Vikas Yadav",
      url: "https://vikasyadav.online",
    },
    offers: project.liveLink
      ? {
          "@type": "Offer",
          url: project.liveLink,
          price: "0",
          priceCurrency: "INR",
        }
      : undefined,
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/projects">Projects</Link>
        <span>/</span>
        <span>{project.title}</span>
      </nav>

      <article className={styles.detail}>
        <header className={styles.detailHeader}>
          {project.associatedWith && <span className={styles.badge}>@ {project.associatedWith}</span>}
          <h1>{project.title}</h1>
          <p className={styles.lede}>{project.seoSummary ?? project.description}</p>
          <div className={styles.actions}>
            {project.liveLink && (
              <Link href={project.liveLink} target="_blank" className={styles.primary}>
                Live demo ↗
              </Link>
            )}
            {project.gitHubLink && (
              <Link href={project.gitHubLink} target="_blank" className={styles.secondary}>
                GitHub
              </Link>
            )}
            <Link href="/#contact" className={styles.secondary}>
              Hire me for similar work
            </Link>
          </div>
        </header>

        {project.images[0] && (
          <div className={styles.heroImage}>
            <Image
              src={project.images[0].url}
              alt={`${project.title} screenshot — full stack project by Vikas Yadav`}
              width={1200}
              height={675}
              quality={90}
              unoptimized
              priority
            />
          </div>
        )}

        <section className={styles.detailSection}>
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>

        {project.highlights && project.highlights.length > 0 && (
          <section className={styles.detailSection}>
            <h2>Key results</h2>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <section className={styles.detailSection}>
          <h2>Tech stack</h2>
          <p>{project.TechStack}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        <section className={styles.ctaBand}>
          <h2>Need a Full Stack Engineer who ships?</h2>
          <p>
            I&apos;m Vikas Yadav — open to full-time Full Stack / Backend roles (remote or relocation).
            Let&apos;s talk about your product.
          </p>
          <div className={styles.actions}>
            <Link href="/#contact" className={styles.primary}>Contact me</Link>
            <Link href="/Vikas_Yadav_Full_Stack_Resume.pdf" target="_blank" className={styles.secondary}>
              Download resume
            </Link>
          </div>
        </section>
      </article>

      <section className={styles.related}>
        <h2>More projects</h2>
        <div className={styles.relatedGrid}>
          {related.map((item) => (
            <Link key={item.id} href={`/projects/${getProjectSlug(item)}`} className={styles.relatedCard}>
              <strong>{item.title}</strong>
              <span>{item.tags.slice(0, 3).join(" · ")}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
