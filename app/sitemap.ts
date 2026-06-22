import type { MetadataRoute } from "next";

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

  const projectSlugs = [
    "truthguard-ai",
    "sistem-informasi-pkh",
    "sistem-absensi-biometrik-iot",
    "antrian-skck",
    "deteksi-polusi-udara",
    "mlops-monitoring-logging",
    "eksperimen-ml-sml",
    "deteksi-udara-iot-v2",
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
    for (const slug of projectSlugs) {
      routes.push({
        url: `${baseUrl}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
