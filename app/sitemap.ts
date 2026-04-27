import { MetadataRoute } from 'next';
import { blogArticles } from './data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elrixenergy.in';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/subsidy',
    '/contact',
    '/financing',
    '/projects',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog routes
  const blogRoutes = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
