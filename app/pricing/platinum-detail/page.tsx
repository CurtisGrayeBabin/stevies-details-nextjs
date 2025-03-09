"use client";
import React from 'react';
import usePriceData from "@/hooks/usePriceData";

export default function PlatinumPage() {

  const data = usePriceData("/price-data/platinum-detail.json");

  return (
    <main>
      {data}
    </main>
  );
}