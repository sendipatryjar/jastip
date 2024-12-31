"use client";

import React from 'react';
import { StatusBadge } from './StatusBadge';
import { RecapData } from '@/utils/types';

interface RecapCardProps {
  recap: RecapData;
}

export function RecapCard({ recap }: RecapCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row">
        {recap.photo && (
          <div className="md:w-48 flex-shrink-0">
            <img
              src={recap.photo}
              alt="Produk"
              className="h-48 w-full md:w-48 object-cover"
            />
          </div>
        )}
        
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Nomor Resi</p>
              <p className="font-medium">{recap.tracking_number || '-'}</p>
            </div>
            <StatusBadge status={recap.order_status} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Tanggal Proses</p>
              <p className="font-medium">{recap.process_date || '-'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Tanggal Kirim</p>
              <p className="font-medium">{recap.ship_date || '-'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Harga</p>
              <p className="font-medium text-green-600">
                Rp {recap.price.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-1">Alamat Pengiriman</p>
            <p className="text-sm">{recap.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}