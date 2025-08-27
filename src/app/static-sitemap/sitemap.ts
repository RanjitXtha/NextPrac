import { MetadataRoute } from "next";

export default function staticSitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "http://localhost:3000/about",
    "http://localhost:3000/contact",
    "http://localhost:3000/privacy",
  ];

  return staticPages.map(url => ({ url }));
}