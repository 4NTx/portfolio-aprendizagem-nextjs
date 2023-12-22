import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio.4ntx.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://4ntx.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 2,
    },
  ];
}