import { MetadataRoute } from 'next';
import { blogArticles } from './data/blogData';
import { SITE_URL } from './lib/siteConfig';

function latestBlogModifiedDate(): Date {
  const timestamps = blogArticles.map((article) =>
    new Date(article.modifiedDate || article.publishedDate).getTime(),
  );
  return new Date(Math.max(...timestamps));
}

const contentUpdated = new Date('2026-06-13');
const blogLastModified = latestBlogModifiedDate();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`,          lastModified: contentUpdated, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/services`,  lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/subsidy`,   lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`,   lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`,     lastModified: contentUpdated, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${baseUrl}/projects`,  lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/privacy`,   lastModified: new Date('2026-05-22'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${baseUrl}/terms`,     lastModified: new Date('2026-05-22'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${baseUrl}/blog`,      lastModified: blogLastModified, changeFrequency: 'weekly',  priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services/residential`, lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/commercial`,  lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/industrial`,  lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/maintenance`, lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/solar-company-nellore`,  lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/solar-company-tirupati`, lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/solar-company-kadapa`,   lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/solar-company-ongole`,   lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.9 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.modifiedDate || article.publishedDate),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...blogRoutes];
}
