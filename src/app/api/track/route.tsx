import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const trackingNumber = body.trackingNumber;

    const response = await fetch('https://www.hbfcargo.com/action.do', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        actionData: {
          action: "deliveryTrackAction",
          method: "getTrackList"
        },
        requestData: {
          no: trackingNumber,
          delivery_type: "0"
        },
        className: "deliveryTrackAction",
        methodName: "getTrackList",
        rand: new Date().toISOString()
      })
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tracking data' }, { status: 500 });
  }
}