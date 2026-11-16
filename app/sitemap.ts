import type { MetadataRoute } from "next";
import { ProjectsData, getProjectSlug } from "@/app/data/ProjectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vikasyadav.online";
  const now = new Date();

  const projectUrls = ProjectsData.map((project) => ({
    url: `${baseUrl}/projects/${getProjectSlug(project)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apps/bawal-xi/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...projectUrls,
  ];
}
