export const SHIPPING_RATES = {
    AIR: {
      CHINA_BATAM: 135000, // per kg
      BATAM_CUSTOMER: 78000, // base rate
    },
    SEA: {
      CHINA_BATAM: 45000, // per kg
      BATAM_CUSTOMER: 78000, // base rate
    }
  } as const;
  
  export const ADMIN_FEES = {
    WHATSAPP: 35000,
    ECOMMERCE: 55000
  } as const;
  
  export type ShippingMethod = 'AIR' | 'SEA';
  export type OrderMethod = 'WHATSAPP' | 'ECOMMERCE';