import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919640484677?text=Hi%20ELRIX%20ENERGY,%20I'm%20interested%20in%20a%20solar%20solution." 
      target="_blank" 
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" />
      <span className="tooltip">Chat with us</span>
    </a>
  );
};

export default FloatingWhatsApp;
