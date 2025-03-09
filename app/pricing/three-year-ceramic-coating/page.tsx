"use client";
import React from 'react';
import usePriceData from "@/hooks/usePriceData";

export default function ThreeYearPage() {

  const data = usePriceData("/price-data/three-year-ceramic-coating.json");

  return (
    <main>
      {data}
    </main>
  );
}