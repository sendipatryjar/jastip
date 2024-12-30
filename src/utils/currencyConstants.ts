export const EXCHANGE_RATES = {
    CNY: 2300,  // Yuan to IDR
    SGD: 12500  // SGD to IDR
  } as const;
  
  export type CurrencyType = keyof typeof EXCHANGE_RATES;