
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {

    /*
    const pageTitle = "Pricing";
    const contentDescription = "Stevie's Details Prices";
    const canonicalLink = "https://steviesdetails.com/prices";
    */

    return (
      <>
      
        <h1>Pricing</h1>
        
        <h2>Select from our offerings below:</h2>
        
        <ul className="pricing-container">
          <li><Link href="/maintenance-detail">Maintenance Detail</Link></li>
          <li><Link href="/platinum-detail">Platinum Detail</Link></li>
          <li><Link href="/level-1-interior-detail">Level 1 Interior Detail</Link></li>
          <li><Link href="/level-2-interior-detail">Level 2 Interior Detail</Link></li>
          <li><Link href="/one-step-paint-correction">1 Step Paint Correction</Link></li>
          <li><Link href="/two-step-paint-correction">2 Step Paint Correction</Link></li>
          <li><Link href="/six-month-ceramic-sealant">6 Month Ceramic Sealant</Link></li>
          <li><Link href="/three-year-ceramic-coating">3 Year Ceramic Coating</Link></li>
          <li><Link href="/five-year-ceramic-coating">5 Year Ceramic Coating</Link></li>
          <li><Link href="/seven-year-ceramic-coating">7 Year Ceramic Coating</Link></li>
        </ul>
  
      </>
    );
  };
  