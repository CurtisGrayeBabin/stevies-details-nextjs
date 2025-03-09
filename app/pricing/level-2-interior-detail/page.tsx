"use client";
import React from 'react';
import usePriceData from "@/hooks/usePriceData";

export default function Level2InteriorPage() {

  const data = usePriceData("/price-data/level-2-interior-detail.json");

  return (
    <main>
      {data}
    </main>
  );
}