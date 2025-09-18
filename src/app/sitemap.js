// app/sitemap.js

export default async function sitemap() {
const baseUrl = "https://www.nanakductcleaning.com";
  const now = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/residential-duct-cleaning`,
      lastModified: now,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial-duct-cleaning`,
      lastModified: now,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dryer-vent-cleaning`,
      lastModified: now,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changefreq: "yearly",
      priority: 0.7,
    },
  ];
}
