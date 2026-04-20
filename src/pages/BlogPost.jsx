import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogArticles } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  
  // Find the exact article by routing ID
  const article = blogArticles.find(b => b.id === id);

  // If someone manipulates the URL to a fake article, bounce them securely back to the blog index
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post-page" style={{ paddingTop: '100px', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <Link to="/blog" className="text-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontWeight: '500' }}>
          <ArrowLeft size={18} /> Back to Articles
        </Link>
        
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: '1.2' }}>{article.title}</h1>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '2rem' }}>
             <span>{article.date}</span>
             <span>•</span>
             <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{article.author}</span>
          </div>
        </header>

        {/* Since it's raw static HTML string coming from our trusted data file, we use dangerouslySetInnerHTML safely */}
        <div 
           className="article-content" 
           style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-dark)' }}
           dangerouslySetInnerHTML={{ __html: article.content }} 
        />
        
        <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--primary)', color: 'white', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Ready for Solar Independence?</h2>
          <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Get priority local installation in Nellore, Kadapa, Tirupati, and Ongole right now.</p>
          <Link to="/contact" className="btn btn-secondary">Get Free Estimate</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
