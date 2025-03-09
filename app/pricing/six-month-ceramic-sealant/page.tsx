"use client";
import React from 'react';
import usePriceData from "@/hooks/usePriceData";

export default function SixMonthPage() {

  const data = usePriceData("/price-data/six-month-ceramic-sealant.json");

  return (
    <main>
      {data}
    </main>
  );
}