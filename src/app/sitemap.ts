import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nihalkhanghauri.vercel.app";
  
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2025-05-03"),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#home`,
      lastModified: new Date("2025-05-03"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date("2025-05-03"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: new Date("2025-05-03"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date("2025-05-03"),
      changeFrequency: "daily", 
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date("2025-05-03"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
