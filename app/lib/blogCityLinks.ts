import { blogArticles, type BlogArticle } from "@/app/data/blogData";

/** City-relevant blog slugs, most relevant first. */
const CITY_BLOG_SLUGS: Record<string, string[]> = {
  nellore: [
    "solar-panel-cost-nellore-after-subsidy",
    "nellore-solar-capital",
    "commercial-solar-epc-nellore",
    "reduce-electricity-bill-rooftop-solar",
    "solar-installation-process-elrix-energy",
  ],
  tirupati: [
    "rooftop-solar-tirupati-homeowners-guide",
    "pm-surya-ghar-tirupati-kadapa",
    "pm-surya-ghar-andhra-pradesh-complete-guide",
    "net-metering-andhra-pradesh-guide",
    "3kw-5kw-10kw-solar-system-comparison",
  ],
  kadapa: [
    "commercial-solar-kadapa-businesses",
    "pm-surya-ghar-tirupati-kadapa",
    "solar-investment-payback-period-roi",
    "3kw-5kw-10kw-solar-system-comparison",
    "net-metering-andhra-pradesh-guide",
  ],
  ongole: [
    "rooftop-solar-benefits-ongole",
    "nellore-solar-capital",
    "reduce-electricity-bill-rooftop-solar",
    "net-metering-andhra-pradesh-guide",
    "on-grid-vs-hybrid-solar-andhra-pradesh",
  ],
};

export function getBlogArticlesForCity(
  citySlug: string,
  limit = 3,
): BlogArticle[] {
  const preferredSlugs = CITY_BLOG_SLUGS[citySlug] ?? [];
  const bySlug = new Map(blogArticles.map((article) => [article.slug, article]));

  const articles: BlogArticle[] = [];
  for (const slug of preferredSlugs) {
    const article = bySlug.get(slug);
    if (article) articles.push(article);
    if (articles.length >= limit) return articles;
  }

  const used = new Set(articles.map((a) => a.slug));
  const extras = [...blogArticles]
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
    )
    .filter((article) => !used.has(article.slug));

  return [...articles, ...extras].slice(0, limit);
}

/** Latest articles for the home page blog teaser. */
export function getLatestBlogArticles(limit = 3): BlogArticle[] {
  return [...blogArticles]
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
    )
    .slice(0, limit);
}
