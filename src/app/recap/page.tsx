"use client"
import React, { useEffect, useState } from 'react';
import { RecapData } from '@/utils/types';
import { createRecap, getRecaps } from '@/lib/supabase/queries';
import RecapForm from '@/components/forms/RecapForm';
import RecapList from '@/components/recap/RecapList';

export default function Recap() {
  const [recaps, setRecaps] = useState<RecapData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRecaps();
  }, []);

  async function loadRecaps() {
    try {
      const data = await getRecaps();
      setRecaps(data);
    } catch (err) {
      setError('Failed to load recap data');
      console.log('error euy');
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (formData: Omit<RecapData, 'id' | 'created_at'>) => {
    try {
      const newRecap = await createRecap(formData);
      setRecaps(prev => [newRecap, ...prev]);
    } catch (err) {
      setError('Failed to save recap data');
      console.error(err);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Data Rekap Pesanan</h1>
      <RecapForm onSubmit={handleSubmit} />
      <RecapList recaps={recaps} />
    </div>
  );
}