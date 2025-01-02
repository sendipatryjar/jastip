import { NextResponse } from 'next/server';
import { fetchHBFTracking } from '@/lib/hbf-api';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.trackingNumber) {
      return NextResponse.json(
        { error: 'Tracking number is required' },
        { status: 400 }
      );
    }

    const data = await fetchHBFTracking(body.trackingNumber);
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tracking data' },
      { status: 500 }
    );
  }
}