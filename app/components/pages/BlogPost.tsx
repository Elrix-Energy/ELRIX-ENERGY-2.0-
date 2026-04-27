"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { blogArticles } from '../../data/blogData';

const BlogPost = ({ id }) => {
  
  // Find the exact article by routing ID
  const article = blogArticles.find(b => b.id === id);

  // If someone manipulates the URL to a fake article, bounce them securely back to the blog index
  if (!article) return null;

  return (
    <div className="blog-post-page">
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <Link href="/blog" className="text-primary blog-back-link">
          <ArrowLeft size={18} /> Back to Articles
        </Link>
        
        <header className="blog-post-header">
          <h1>{article.title}</h1>
          <div className="blog-post-meta">
             <span>{article.date}</span>
             <span>•</span>
             <span className="author">{article.author}</span>
          </div>
        </header>

        {/* Since it's raw static HTML string coming from our trusted data file, we use dangerouslySetInnerHTML safely */}
        <div 
           className="article-content" 
           dangerouslySetInnerHTML={{ __html: article.content }} 
        />
        
        <div className="article-cta-banner">
          <h2>{article.ctaText || 'Ready for Solar Independence?'}</h2>
          <p>{article.ctaSubtext || 'Get priority local installation in Nellore, Kadapa, Tirupati, and Ongole right now.'}</p>
          <Link href="/contact" className="btn btn-secondary">Get Free Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
