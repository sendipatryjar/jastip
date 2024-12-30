import React, { useState } from 'react';
import { CurrencyInput } from './currency-input';
import { WeightInput } from './weight-input';
import { PriceSummary } from './price-summary';
import { CurrencySelector } from './currency-selector';
import { calculateTotal } from '@/utils/priceCalculation';
import { CurrencyType } from '@/utils/currencyConstants';
import { ShippingMethod, OrderMethod } from '@/utils/shippingConstants';

export function PriceCalculator() {
  const [currency, setCurrency] = useState<CurrencyType>('CNY');
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('AIR');
  const [orderMethod, setOrderMethod] = useState<OrderMethod>('WHATSAPP');
  const [values, setValues] = useState({
    price: '',
    weight: '',
  });

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const total = calculateTotal(
    values.price,
    parseFloat(values.weight) || 0,
    currency,
    shippingMethod,
    orderMethod
  );

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
      <CurrencySelector
        selectedCurrency={currency}
        onCurrencyChange={setCurrency}
      />
      
      <div className="mb-6 space-y-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setShippingMethod('AIR')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              shippingMethod === 'AIR'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Via Udara
          </button>
          <button
            onClick={() => setShippingMethod('SEA')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              shippingMethod === 'SEA'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Via Laut
          </button>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setOrderMethod('WHATSAPP')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              orderMethod === 'WHATSAPP'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            WhatsApp
          </button>
          <button
            onClick={() => setOrderMethod('ECOMMERCE')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              orderMethod === 'ECOMMERCE'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            E-Commerce
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <CurrencyInput
          label={`Harga Barang (${currency})`}
          value={values.price}
          onChange={(value) => handleChange('price', value)}
          placeholder={`Masukkan harga dalam ${currency}`}
          icon="💰"
        />
        
        <WeightInput
          value={values.weight}
          onChange={(value) => handleChange('weight', value)}
        />

        <PriceSummary 
          values={values}
          total={total}
          currency={currency}
          shippingMethod={shippingMethod}
          orderMethod={orderMethod}
        />
      </div>
    </div>
  );
}