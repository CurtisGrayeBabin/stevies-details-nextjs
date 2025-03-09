"use client";
import React from 'react';
import usePriceData from "@/hooks/usePriceData";

export default function Level1InteriorPage() {

  const data = usePriceData("/price-data/level-1-interior-detail.json");

  return (
    <main>
      {data}
    </main>
  );
}