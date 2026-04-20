import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';
import './FloatingCalculator.css';

const FloatingCalculator = () => {
  return (
    <Link to="/#calculator" className="floating-calc-btn" aria-label="Open Solar Calculator">
      <Calculator size={28} />
      <span className="tooltip">Calculate Savings</span>
    </Link>
  );
};

export default FloatingCalculator;
