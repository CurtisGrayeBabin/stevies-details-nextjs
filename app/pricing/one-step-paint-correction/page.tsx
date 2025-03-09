"use client";
import React from 'react';
import usePriceData from "@/hooks/usePriceData";

export default function OneStepPage() {

  const data = usePriceData("/price-data/one-step-paint-correction.json");

  return (
    <main>
      {data}
    </main>
  );
}