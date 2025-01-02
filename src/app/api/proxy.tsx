import { NextResponse } from 'next/server';


export async function POST(request: Request) {
    alert('oi')
  try {
    const body = await request.json();
    
    // Create form data string
    const formData = new URLSearchParams({
      actionData: JSON.stringify({
        action: "deliveryTrackAction",
        method: "getTrackList"
      }),
      requestData: JSON.stringify({
        no: body.trackingNumber,
        delivery_type: "0"
      }),
      className: "deliveryTrackAction",
      methodName: "getTrackList",
      rand: new Date().toISOString()
    }).toString();

    const response = await fetch('https://www.hbfcargo.com/action.do', {
      method: 'POST',
      headers: {
        'Host': 'www.hbfcargo.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:133.0) Gecko/20100101 Firefox/133.0',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-GB,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
        'Origin': 'https://www.hbfcargo.com',
        'Connection': 'keep-alive',
        'Referer': 'https://www.hbfcargo.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin'
      },
      body: formData
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch tracking data' }, 
      { status: 500 }
    );
  }
}