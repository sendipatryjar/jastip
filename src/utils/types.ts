export interface RecapData {
    id: string;
    photo: any;
    process_date: string;
    ship_date: string;
    address: string;
    tracking_number: string;
    order_status: 'pending' | 'processing' | 'shipped' | 'delivered';
    price: number;
    created_at?: string;
    name: string;
  }