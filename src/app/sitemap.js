// app/sitemap.js

export default async function sitemap() {
  const baseUrl = "https://nanakductcleaning.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/residential-duct-cleaning`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial-duct-cleaning`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dryer-vent-cleaning`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.7,
    },
  ];
}
