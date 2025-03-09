"use client";
import React from 'react';
import usePriceData from "@/hooks/usePriceData";

export default function FiveYearPage() {

  const data = usePriceData("/price-data/five-year-ceramic-coating.json");

  return (
    <main>
      {data}
    </main>
  );
}