import { MetadataRoute } from 'next';
import { blogArticles } from './data/blogData';
import { SITE_URL } from './lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`,          lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/services`,  lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/subsidy`,   lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`,   lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`,     lastModified: new Date('2026-05-18'), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${baseUrl}/privacy`,   lastModified: new Date('2026-05-22'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${baseUrl}/terms`,     lastModified: new Date('2026-05-22'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${baseUrl}/blog`,      lastModified: new Date('2026-05-18'), changeFrequency: 'weekly',  priority: 0.8 },
    // /financing redirects to /subsidy — excluded from sitemap
    // /projects intentionally excluded — noindex until content is ready
  ];

  // Service sub-pages
  const serviceRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services/residential`, lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/commercial`,  lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/industrial`,  lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/maintenance`, lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.7 },
  ];

  // City landing pages
  const cityRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/solar-company-nellore`,  lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/solar-company-tirupati`, lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/solar-company-kadapa`,   lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/solar-company-ongole`,   lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.9 },
  ];

  // Dynamic blog routes — use real publication dates
  const blogRoutes: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.publishedDate),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...blogRoutes];
}
