"use client";
import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "../../data/blogData";
import { estimateReadingTimeMinutes, formatReadingTime } from "../../lib/blogUtils";
import Reveal from "../common/Reveal";

const Blog = () => {
  return (
    <div className="blog-page">
      <header className="page-header">
        <div className="container">
          <h1>Resources & Insights</h1>
          <p>Expert local analysis on solar technology, regional subsidies, and grid policies.</p>
        </div>
      </header>
      <section className="section bg-background blog-listing-section">
        <div className="container">
          <div className="blog-grid">
            {blogArticles.map((article, index) => (
              <Reveal delay={index * 150} key={article.id}>
                <article className="blog-card">
                  <Link href={`/blog/${article.slug}`} className="blog-card__media">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={640}
                      height={360}
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="blog-card__image"
                    />
                  </Link>
                  <div className="blog-card__body">
                    <p className="blog-meta">
                      {article.date} • {formatReadingTime(estimateReadingTimeMinutes(article.content))} • {article.author}
                    </p>
                    <h2 className="blog-card-title">
                      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <p className="blog-card-excerpt">{article.summary}</p>
                    <Link href={`/blog/${article.slug}`} className="text-primary blog-read-link">
                      Read Full Article &rarr;
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
