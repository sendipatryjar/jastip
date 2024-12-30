'use client';

import React from 'react';
import { Navbar } from '@/components';
import { PriceCalculator } from '@/components/price-calculator';

export default function PricePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#b9aeef] to-[#8e82e8] py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Kalkulator Harga
            </h1>
            <p className="text-white/90 text-lg">
              Hitung estimasi total biaya pembelian barang dengan mudah
            </p>
          </div>
          
          <PriceCalculator />
        </div>
      </main>
    </>
  );
}