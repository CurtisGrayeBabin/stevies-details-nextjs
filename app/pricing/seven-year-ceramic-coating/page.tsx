"use client";
import React from 'react';
import usePriceData from "@/hooks/usePriceData";

export default function SevenYearPage() {

  const data = usePriceData("/price-data/seven-year-ceramic-coating.json");

  return (
    <main>
      {data}
    </main>
  );
}