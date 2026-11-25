import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://randisumitro.vercel.app";
  const locales = ["id", "en"];
  const pages = [
    "",
    "/about",
    "/skills",
    "/projects",
    "/research",
    "/experience",
    "/contact",
  ];

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
      });
    }
    for (const project of projects) {
      routes.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
