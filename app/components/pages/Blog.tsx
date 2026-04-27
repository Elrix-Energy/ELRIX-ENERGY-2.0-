"use client";
import React from 'react';
import Link from 'next/link';
import { blogArticles } from '../../data/blogData';
import Reveal from '../common/Reveal';

const Blog = () => {
  return (
    <div className="blog-page">
      <header className="page-header">
        <div className="container">
          <h1>Resources & Insights</h1>
          <p>Expert local analysis on solar technology, regional subsidies, and grid policies.</p>
        </div>
      </header>
      <section className="section bg-background" style={{ paddingBottom: '8rem' }}>
        <div className="container">
           <div className="blog-grid">
              {blogArticles.map((article, index) => (
                <Reveal delay={index * 150} key={article.id}>
                  <div className="blog-card">
                    <p className="blog-meta">{article.date} • {article.author}</p>
                    <h3 className="blog-card-title">{article.title}</h3>
                    <p className="blog-card-excerpt">{article.summary}</p>
                    <Link href={`/blog/${article.id}`} className="text-primary blog-read-link">
                      Read Full Article &rarr;
                    </Link>
                  </div>
                </Reveal>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
