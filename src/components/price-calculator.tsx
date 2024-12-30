import React, { useState } from 'react';
import { CurrencyInput } from './currency-input';
import { PriceSummary } from './price-summary';
import { calculateTotal } from '@/utils/priceCalculation';

export function PriceCalculator() {
  const [values, setValues] = useState({
    price: '',
    shipping: '',
    adminFee: 55000
  });

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const total = calculateTotal(values.price, values.shipping, values.adminFee);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
      <div className="space-y-4">
        <CurrencyInput
          label="Harga Barang"
          value={values.price}
          onChange={(value) => handleChange('price', value)}
          placeholder="Contoh: 1.000.000"
          icon="💰"
        />
        
        <CurrencyInput
          label="Ongkos Kirim"
          value={values.shipping}
          onChange={(value) => handleChange('shipping', value)}
          placeholder="Contoh: 50.000"
          icon="🚚"
        />
        
        <CurrencyInput
          label="Biaya Admin"
          value={values.adminFee.toString()}
          onChange={(value) => handleChange('adminFee', value)}
          placeholder="Biaya admin"
          icon="📝"
          disabled
        />

        <PriceSummary values={values} total={total} />
      </div>
    </div>
  );
}