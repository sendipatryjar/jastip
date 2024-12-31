"use client";

import React, { useState } from "react";
import { StatusBadge } from "./StatusBadge";
import { RecapData } from "@/utils/types";
import { supabase } from "@/lib/supabase/client"; // Sesuaikan dengan lokasi Supabase Anda
import { getRecaps } from "@/lib/supabase/queries";

interface RecapCardProps {
  recap: RecapData;
}

export function RecapCard({ recap }: RecapCardProps) {
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(recap.order_status);

  // Fungsi untuk memperbarui status
  const updateStatus = async (status: any) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("recaps") // Nama tabel Anda
        .update({ order_status: status }) // Status baru
        .eq("id", recap.id); // Filter berdasarkan ID

      if (error) {
        console.error("Error updating status:", error.message);
        return;
      }

      console.log("Status updated successfully:", data);
      setSelectedStatus(status); // Perbarui status yang dipilih
      setShowDropdown(false); // Tutup dropdown
      alert("Status berhasil diperbarui!");
      getRecaps()
    } catch (error) {
      console.error("Failed to update status:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row items-center p-2">
        {recap.photo && (
          <div className="md:w-48 flex-shrink-0">
            <img
              src={recap.photo}
              alt="Produk"
              className="h-30 w-full md:w-30 object-cover"
            />
          </div>
        )}

        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Nomor Resi</p>
              <p className="font-medium">{recap.tracking_number || "-"}</p>
            </div>
            <StatusBadge status={selectedStatus} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Tanggal Proses</p>
              <p className="font-medium">{recap.process_date || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Tanggal Kirim</p>
              <p className="font-medium">{recap.ship_date || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Harga</p>
              <p className="font-medium text-green-600">
                Rp {recap.price.toLocaleString("id-ID")}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-1">Alamat Pengiriman</p>
            <p className="text-sm">{recap.address}</p>
          </div>

          <div className="mt-6 flex justify-end">
            {!showDropdown ? (
              <button
                className="px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
                onClick={() => setShowDropdown(true)}
                disabled={loading}
              >
                {loading ? "Loading..." : "Update Status"}
              </button>
            ) : (
              <div className="relative">
                <select
                  className="px-4 py-2 text-sm border rounded-lg"
                  value={selectedStatus}
                  onChange={(e) => updateStatus(e.target.value)}
                >
                  <option value="pending">Menunggu</option>
                  <option value="processing">Diproses</option>
                  <option value="shipped">Dikirim</option>
                  <option value="delivered">Diterima</option>
             
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
