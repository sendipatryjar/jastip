"use client";

import React from 'react';
import { RecapCard } from './RecapCard';
import { RecapData } from '@/utils/types';

interface RecapListProps {
  recaps: RecapData[];
}

export default function RecapList({ recaps }: RecapListProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Daftar Pesanan</h2>
        <p className="text-gray-500">Total: {recaps.length} pesanan</p>
      </div>

      {recaps.length > 0 ? (
        <div className="grid gap-6">
          {recaps.map((recap) => (
            <RecapCard key={recap.id} recap={recap} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Belum ada pesanan</h3>
          <p className="mt-1 text-sm text-gray-500">
            Pesanan yang sudah dibuat akan muncul di sini
          </p>
        </div>
      )}
    </div>
  );
}