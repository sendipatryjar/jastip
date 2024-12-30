export const calculateTotal = (
    price: string,
    shipping: string,
    adminFee: number
  ): number => {
    const priceNum = parseInt(price || '0');
    const shippingNum = parseInt(shipping || '0');
    return priceNum + shippingNum + adminFee;
  };