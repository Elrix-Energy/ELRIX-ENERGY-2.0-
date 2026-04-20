import React from 'react';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';

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
           <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem'}}>
              {blogArticles.map(article => (
                <div key={article.id} style={{background: 'white', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,0,0,0.05)', transition: 'transform 0.3s', display: 'flex', flexDirection: 'column'}}>
                  <p style={{color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 500}}>{article.date} • {article.author}</p>
                  <h3 style={{marginBottom: '1rem', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', lineHeight: 1.3}}>{article.title}</h3>
                  <p style={{color: 'var(--text-light)', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.7}}>{article.summary}</p>
                  <Link to={`/blog/${article.id}`} className="text-primary hover-effect" style={{fontWeight: 600, display: 'inline-block'}}>
                    Read Full Article &rarr;
                  </Link>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
