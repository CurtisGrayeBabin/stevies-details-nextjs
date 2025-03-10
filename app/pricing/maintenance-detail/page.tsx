"use client";
import React from 'react';
import usePriceData from "@/hooks/usePriceData";

export default function MaintenancePage() {

  const data = usePriceData("/price-data/maintenance-detail.json");

  return (
    <main>
      {data}
    </main>
  );
}