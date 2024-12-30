import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-purple-600 to-indigo-700 py-24">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Wishlist By Sazy</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Jasa titip terpercaya untuk produk China dengan pengalaman lebih dari 5 tahun melayani pelanggan di seluruh Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}