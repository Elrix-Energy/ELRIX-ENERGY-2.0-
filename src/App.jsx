import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import FloatingCalculator from './components/common/FloatingCalculator';
import ScrollToTop from './components/common/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Subsidy from './pages/Subsidy';
import Financing from './pages/Financing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/subsidy" element={<Subsidy />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCalculator />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
