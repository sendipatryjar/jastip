import React from 'react';
import { CurrencyType, EXCHANGE_RATES } from '@/utils/currencyConstants';
import { convertToIDR } from '@/utils/priceCalculation';

interface PriceSummaryProps {
  values: {
    price: string;
    shipping: string;
    adminFee: number;
  };
  total: number;
  currency: CurrencyType;
}

export function PriceSummary({ values, total, currency }: PriceSummaryProps) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  });

  const priceInIDR = convertToIDR(values.price, currency);

  return (
    <div className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
      <h3 className="text-lg font-semibold mb-4">Rincian Biaya</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Harga Barang ({currency}):</span>
          <div className="text-right">
            <div>{values.price} {currency}</div>
            <div className="text-sm text-white/80">
              {formatter.format(priceInIDR)}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <span>Ongkos Kirim:</span>
          <span>{formatter.format(parseInt(values.shipping || '0'))}</span>
        </div>
        <div className="flex justify-between">
          <span>Biaya Admin:</span>
          <span>{formatter.format(values.adminFee)}</span>
        </div>
        <div className="border-t border-white/30 pt-2 mt-2">
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>{formatter.format(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}