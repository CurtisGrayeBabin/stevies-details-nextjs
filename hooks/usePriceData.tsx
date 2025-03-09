"use client";
import { useEffect, useState } from "react";
import PriceContent from '@/components/PriceContent';

interface PriceData {
  title: string;
  notes: string;
  prices: any;
  details: any;
  alternateFirstColumnTitle: string;
}

export default function usePriceData(path: string) {
    const [data, setData] = useState<PriceData | null>();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(path);
                if (!res.ok){
                    throw new Error("Failed to fetch pricing data.");
                }
                const json = await res.json();
                setData(json);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (error) return <p>Sorry, but there was an error fetching data.</p>

    return data ? <PriceContent jsonData={data} /> : <h1>Loading...</h1>;
}