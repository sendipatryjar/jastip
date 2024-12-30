import React, { useState } from 'react';
import { CurrencyInput } from './currency-input';
import { PriceSummary } from './price-summary';
import { CurrencySelector } from './currency-selector';
import { calculateTotal } from '@/utils/priceCalculation';
import { CurrencyType } from '@/utils/currencyConstants';

export function PriceCalculator() {
  const [currency, setCurrency] = useState<CurrencyType>('CNY');
  const [values, setValues] = useState({
    price: '',
    shipping: '',
    adminFee: 55000
  });

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const total = calculateTotal(values.price, values.shipping, values.adminFee, currency);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
      <CurrencySelector
        selectedCurrency={currency}
        onCurrencyChange={setCurrency}
      />
      
      <div className="space-y-4">
        <CurrencyInput
          label={`Harga Barang (${currency})`}
          value={values.price}
          onChange={(value) => handleChange('price', value)}
          placeholder={`Masukkan harga dalam ${currency}`}
          icon="💰"
        />
        
        <CurrencyInput
          label="Ongkos Kirim (IDR)"
          value={values.shipping}
          onChange={(value) => handleChange('shipping', value)}
          placeholder="Contoh: 50.000"
          icon="🚚"
        />
        
        <CurrencyInput
          label="Biaya Admin (IDR)"
          value={values.adminFee.toString()}
          onChange={(value) => handleChange('adminFee', value)}
          placeholder="Biaya admin"
          icon="📝"
          disabled
        />

        <PriceSummary 
          values={values} 
          total={total} 
          currency={currency}
        />
      </div>
    </div>
  );
}