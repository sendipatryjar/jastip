import React from 'react';
import { CurrencyType, EXCHANGE_RATES } from '@/utils/currencyConstants';

interface CurrencySelectorProps {
  selectedCurrency: CurrencyType;
  onCurrencyChange: (currency: CurrencyType) => void;
}

export function CurrencySelector({ selectedCurrency, onCurrencyChange }: CurrencySelectorProps) {
  return (
    <div className="flex space-x-4 mb-6">
      {(Object.keys(EXCHANGE_RATES) as CurrencyType[]).map((currency) => (
        <button
          key={currency}
          onClick={() => onCurrencyChange(currency)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedCurrency === currency
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {currency} (Rp {EXCHANGE_RATES[currency].toLocaleString('id-ID')})
        </button>
      ))}
    </div>
  );
}