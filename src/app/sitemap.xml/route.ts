import { NextResponse } from "next/server";

export async function GET() {
  const sitemaps = [
    "http://localhost:3000/ssg/sitemap.xml",
    "http://localhost:3000/ssr/sitemap.xml",
    "http://localhost:3000/isr/sitemap.xml",
    "http://localhost:3000/static-sitemap/sitemap.xml"
  ];

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps.map(url => `
  <sitemap>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('')}
</sitemapindex>`;

  return new NextResponse(sitemapIndex, {
    headers: { "Content-Type": "application/xml" },
  });
}
