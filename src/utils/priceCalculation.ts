import { CurrencyType, EXCHANGE_RATES } from './currencyConstants';
import { SHIPPING_RATES } from './shippingConstants';

export const convertToIDR = (
  amount: string,
  currency: CurrencyType
): number => {
  const numAmount = parseFloat(amount || '0');
  return Math.round(numAmount * EXCHANGE_RATES[currency]);
};

export const calculateShipping = (weight: number): number => {
  if (!weight) return 0;
  return (SHIPPING_RATES.CHINA_BATAM * weight) + SHIPPING_RATES.BATAM_CUSTOMER;
};

export const calculateTotal = (
  price: string,
  weight: number,
  adminFee: number,
  currency: CurrencyType
): number => {
  const priceInIDR = convertToIDR(price, currency);
  const shippingCost = calculateShipping(weight);
  return priceInIDR + shippingCost + adminFee;
};