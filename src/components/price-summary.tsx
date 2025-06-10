import React from 'react';
import { CurrencyType } from '@/utils/currencyConstants';
import { ShippingMethod, OrderMethod, ADMIN_FEES, SHIPPING_RATES } from '@/utils/shippingConstants';
import { convertToIDR, calculateShipping } from '@/utils/priceCalculation';

interface PriceSummaryProps {
  values: {
    price: string;
    weight: string;
    ongkir: string;
  };
  total: number;
  currency: CurrencyType;
  shippingMethod: ShippingMethod;
  orderMethod: OrderMethod;
}

export function PriceSummary({ 
  values, 
  total, 
  currency,
  shippingMethod,
  orderMethod 
}: PriceSummaryProps) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  });

  const priceInIDR = convertToIDR(values.price, currency, orderMethod);
  const weight = parseFloat(values.weight) || 0;
  const shippingCost = calculateShipping(weight, shippingMethod);
  const adminFee = ADMIN_FEES[orderMethod];
  const chinaBatamCost = weight * SHIPPING_RATES[shippingMethod].CHINA_BATAM;
  const batamCustomerCost = values.ongkir

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
          <span>Berat:</span>
          <span>{weight} kg</span>
        </div>

        <div className="space-y-1 border-t border-white/20 pt-2">
          <div className="flex justify-between text-sm">
            <span>Ongkir China - Batam ({shippingMethod}):</span>
            <span>{formatter.format(chinaBatamCost)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Ongkir Batam - Tujuan:</span>
            <span>{formatter.format(batamCustomerCost)}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Total Ongkir:</span>
            <span>{formatter.format(shippingCost)}</span>
          </div>
        </div>

        <div className="flex justify-between">
          <span>Biaya Admin ({orderMethod}):</span>
          <span>{formatter.format(adminFee)}</span>
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