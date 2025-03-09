"use client";
import React from 'react';
import usePriceData from "@/hooks/usePriceData";

export default function TwoStepPage() {

  const data = usePriceData("/price-data/two-step-paint-correction.json");

  return (
    <main>
      {data}
    </main>
  );
}