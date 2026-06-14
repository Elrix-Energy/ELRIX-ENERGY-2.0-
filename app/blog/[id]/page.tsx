import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogArticles } from "../../data/blogData";
import { BlogRelatedLinks } from "../../components/blog/BlogRelatedLinks";
import BlogTableOfContents from "../../components/blog/BlogTableOfContents";
import { buildPageMetadata } from "../../lib/seoConfig";
import { buildFaqPageSchema } from "../../lib/citySchema";
import {
  estimateReadingTimeMinutes,
  extractBlogFaqs,
  enhanceArticleHtml,
  extractH2Headings,
  formatReadingTime,
} from "../../lib/blogUtils";
import { BRAND, SITE_URL } from "../../lib/siteConfig";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ id: article.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = blogArticles.find((b) => b.id === id);
  if (!article) return { title: "Blog" };

  const ogImage = {
    url: article.image,
    width: 1200,
    height: 675,
    alt: article.title,
  };

  return buildPageMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/blog/${article.slug}`,
    keywords: article.keywords,
    type: "article",
    publishedTime: article.publishedDate,
    modifiedTime: article.modifiedDate,
    authors: [article.author],
    images: [ogImage],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = blogArticles.find((b) => b.id === id);
  if (!article) notFound();

  const readingMinutes = estimateReadingTimeMinutes(article.content);
  const readingLabel = formatReadingTime(readingMinutes);
  const articleHtml = enhanceArticleHtml(article.content);
  const tocHeadings = extractH2Headings(articleHtml);
  const blogFaqs = extractBlogFaqs(article.content);
  const faqSchema = blogFaqs.length > 0 ? buildFaqPageSchema(blogFaqs) : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.image}`,
    keywords: article.keywords.join(", "),
    author: {
      "@type": "Organization",
      name: BRAND.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${BRAND.logoPath}`,
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    url: `${SITE_URL}/blog/${article.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_URL}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <div className="blog-post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <div className="container blog-post-container">
        <Link href="/blog" className="text-primary blog-back-link">
          <ArrowLeft size={18} aria-hidden="true" /> Back to Articles
        </Link>

        <figure className="blog-post-hero">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={675}
            priority
            sizes="(max-width: 800px) 100vw, 800px"
            className="blog-post-hero__image"
          />
        </figure>

        <header className="blog-post-header">
          <h1>{article.title}</h1>
          <div className="blog-post-meta">
            <time dateTime={article.publishedDate}>{article.date}</time>
            <span aria-hidden="true">•</span>
            <span>{readingLabel}</span>
            <span aria-hidden="true">•</span>
            <span className="author">{article.author}</span>
          </div>
        </header>

        <BlogTableOfContents headings={tocHeadings} />

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: articleHtml }}
        />

        <div className="article-cta-banner">
          <h2>{article.ctaText}</h2>
          <p>{article.ctaSubtext}</p>
          <Link href="/contact" className="btn btn-primary">
            Get Free Quote →
          </Link>
        </div>

        <BlogRelatedLinks />
      </div>
    </div>
  );
}
