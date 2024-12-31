"use client"
import React, { useEffect, useState } from 'react';
import { RecapData } from '@/utils/types';
import { createRecap, getRecaps } from '@/lib/supabase/queries';
import RecapForm from '@/components/forms/RecapForm';
import RecapList from '@/components/recap/RecapList';
import { supabase } from '@/lib/supabase/client';

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
  const handleUpdate = async(value: any) => {
    try {
        const { data, error } = await supabase
          .from("recaps") // Nama tabel Anda
          .update({ 
            photo: value.photo,
            process_date:  value.process_date,
            ship_date: value.ship_date,
            address: value.address,
            tracking_number: value.tracking_number,
            order_status: value.order_status,
            price:  value.price,
            name:  value.name,

           }) // Status baru
          .eq("id", value.id); // Filter berdasarkan ID
  
        if (error) {
          console.error("Error updating status:", error.message);
          return;
        }
  
        console.log("Status updated successfully:", data);
       
        alert("Status berhasil diperbarui!");
        loadRecaps()
      } catch (error) {
        console.error("Failed to update status:", error);
      } finally {
        setLoading(false);
      }
  
  }
  const handleDelete = async(value: any) => {
    try {
        const { data, error } = await supabase
          .from("recaps") // Nama tabel Anda
          .delete() // Status baru
          .eq("id", value); // Filter berdasarkan ID
  
        if (error) {
          console.error("Error updating status:", error.message);
          return;
        }
  
        console.log("Status updated successfully:", data);
       
        alert("delete berhasil diperbarui!");
        loadRecaps()
      } catch (error) {
        console.error("Failed to update status:", error);
      } finally {
        setLoading(false);
      }
  
  }


  return (
    <div className=" mx-auto px-4 py-8  bg-gradient-to-b from-purple-600 to-indigo-700">
      <h1 className="text-2xl font-bold text-white mb-6">Data Rekap Pesanan</h1>
      <RecapForm onSubmit={handleSubmit} />
      <RecapList recaps={recaps} onUpdate={(data) => (handleUpdate(data))} onDelete={(id) => (handleDelete(id))}/>
    </div>
  );
}