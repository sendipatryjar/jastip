import { CurrencyType, EXCHANGE_RATES } from './currencyConstants';

export const convertToIDR = (
  amount: string,
  currency: CurrencyType
): number => {
  const numAmount = parseFloat(amount || '0');
  return Math.round(numAmount * EXCHANGE_RATES[currency]);
};

export const calculateTotal = (
  price: string,
  shipping: string,
  adminFee: number,
  currency: CurrencyType
): number => {
  const priceInIDR = convertToIDR(price, currency);
  const shippingNum = parseInt(shipping || '0');
  return priceInIDR + shippingNum + adminFee;
};