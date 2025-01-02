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
export interface TrackingData {
    // Add specific type definitions based on the API response
    [key: string]: any;
}
export interface TrackingRequest {
  trackingNumber: string;
}

export interface TrackingData {
  success: boolean;
  message?: string;
  data?: {
    map(arg0: (item: any, i: number) => import("react").JSX.Element): import("react").ReactNode;
    trackList?: Array<{
      no: string;
      status: string;
      date: string;
      location: string;
      description: string;
    }>;
  };
}