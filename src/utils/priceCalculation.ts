import { CurrencyType, EXCHANGE_RATES } from './currencyConstants';
import { SHIPPING_RATES, ADMIN_FEES, ShippingMethod, OrderMethod } from './shippingConstants';

export const convertToIDR = (
  amount: string,
  currency: CurrencyType,
  orderMethod: OrderMethod,
): number => {
  const numAmount = parseFloat(amount || '0');
  if(orderMethod === 'ECOMMERCE'){
    return Math.round((numAmount * EXCHANGE_RATES[currency]) * 1.15);
  }
  return Math.round(numAmount * EXCHANGE_RATES[currency]);
};

export const calculateShipping = (
  weight: number,
  method: ShippingMethod
): number => {
  if (!weight) return 0;
  return (SHIPPING_RATES[method].CHINA_BATAM * weight) + 
         SHIPPING_RATES[method].BATAM_CUSTOMER;
};

export const getAdminFee = (method: OrderMethod): number => {
  return ADMIN_FEES[method];
};

export const calculateTotal = (
  price: string,
  weight: number,
  currency: CurrencyType,
  shippingMethod: ShippingMethod,
  orderMethod: OrderMethod
): number => {
  const priceInIDR = convertToIDR(price, currency, orderMethod);
  const shippingCost = calculateShipping(weight, shippingMethod);
  const adminFee = getAdminFee(orderMethod);
  return priceInIDR + shippingCost + adminFee;
};