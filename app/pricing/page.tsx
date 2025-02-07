
import React from 'react';
import Link from 'next/link';

export default function PricingPage() {

    /*
    const pageTitle = "Pricing";
    const contentDescription = "Stevie's Details Prices";
    const canonicalLink = "https://steviesdetails.com/prices";
    */

    return (
      <>
      
        <h1 className="white-text">Pricing</h1>
        
        <h2>Select from our offerings below:</h2>
        
        <ul className="pricing-container">
          <li><Link href="/pricing/maintenance-detail">Maintenance Detail</Link></li>
          <li><Link href="/pricing/platinum-detail">Platinum Detail</Link></li>
          <li><Link href="/pricing/level-1-interior-detail">Level 1 Interior Detail</Link></li>
          <li><Link href="/pricing/level-2-interior-detail">Level 2 Interior Detail</Link></li>
          <li><Link href="/pricing/one-step-paint-correction">1 Step Paint Correction</Link></li>
          <li><Link href="/pricing/two-step-paint-correction">2 Step Paint Correction</Link></li>
          <li><Link href="/pricing/six-month-ceramic-sealant">6 Month Ceramic Sealant</Link></li>
          <li><Link href="/pricing/three-year-ceramic-coating">3 Year Ceramic Coating</Link></li>
          <li><Link href="/pricing/five-year-ceramic-coating">5 Year Ceramic Coating</Link></li>
          <li><Link href="/pricing/seven-year-ceramic-coating">7 Year Ceramic Coating</Link></li>
        </ul>
  
      </>
    );
  };
  