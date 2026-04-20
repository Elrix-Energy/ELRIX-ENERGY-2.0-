import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

const Calculator = () => {
  const [bill, setBill] = useState('');
  const [calcResult, setCalcResult] = useState(null);

  const calculateSolar = (e) => {
    e.preventDefault();
    const numBill = parseFloat(bill);
    if (!numBill || numBill <= 0) return;
    
    // Estimates: 1kW reduces approx Rs 1100 off bill
    const requiredKw = (numBill / 1100).toFixed(1);
    const savings = (numBill * 12 * 25).toLocaleString('en-IN'); 
    const trees = Math.floor(requiredKw * 31); // Estimate of equivalent trees planted
    setCalcResult({ systemSize: requiredKw, lifetimeSavings: savings, treesPlanted: trees });
  };

  return (
    <div className="calculator-page">
      <header className="page-header">
        <div className="container">
          <h1>Solar Calculator</h1>
          <p>Estimate your system size and long-term savings instantly.</p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <div className="calculator-wrapper glass" style={{background: 'var(--background)'}}>
            <div className="calculator-content text-center">
              <h2><CalcIcon style={{display: 'inline-block', marginRight:'10px', color: 'var(--secondary)'}}/> Estimate Your Savings</h2>
              <p className="mb-3">Enter your average monthly electricity bill below to discover how much you can save with ELRIX ENERGY.</p>
              
              <form onSubmit={calculateSolar} className="calc-form" style={{justifyContent: 'center'}}>
                <div className="calc-input-group" style={{maxWidth: '400px', textAlign: 'left'}}>
                  <label htmlFor="bill">Average Monthly Bill (₹)</label>
                  <input 
                    type="number" 
                    id="bill" 
                    value={bill} 
                    onChange={(e) => setBill(e.target.value)} 
                    placeholder="e.g. 5000" 
                    required 
                    min="100"
                  />
                </div>
                <button type="submit" className="btn btn-secondary">Calculate Now</button>
              </form>

              {calcResult && (
                <div className="calc-result" style={{marginTop: '3rem', flexWrap: 'wrap'}}>
                  <div className="result-box">
                    <h4>Recommended System Size</h4>
                    <p className="result-value text-primary">{calcResult.systemSize} kW</p>
                  </div>
                  <div className="result-box">
                    <h4>Est. 25-Year Savings</h4>
                    <p className="result-value text-secondary">₹ {calcResult.lifetimeSavings}</p>
                  </div>
                  <div className="result-box" style={{border: '1px solid var(--success)'}}>
                    <h4>Environmental Impact</h4>
                    <p className="result-value" style={{color: 'var(--success)'}}>{calcResult.treesPlanted} Trees Planted</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
