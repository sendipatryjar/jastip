export const EXCHANGE_RATES = {
    CNY: 2375,  // Yuan to IDR
    SGD: 13500  // SGD to IDR
  } as const;
  
  export type CurrencyType = keyof typeof EXCHANGE_RATES;