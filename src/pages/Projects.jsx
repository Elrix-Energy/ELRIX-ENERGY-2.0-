import React from 'react';
import { Camera } from 'lucide-react';

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our recent solar installations across Nellore district.</p>
        </div>
      </header>
      
      <section className="section bg-white">
        <div className="container text-center">
          <div style={{ padding: '5rem 0', maxWidth: '600px', margin: '0 auto', background: 'var(--background)', borderRadius: 'var(--radius-lg)' }}>
            <Camera size={64} className="text-text-light mb-3" style={{display: 'inline-block'}} />
            <h2 className="mb-2">Projects Gallery Coming Soon</h2>
            <p className="text-text-light">We are curating our best installation photos and case studies. Check back soon for HD visuals of our 100% HDGI structures and Tier-1 panel alignments.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
