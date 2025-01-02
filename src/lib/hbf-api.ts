// HBF Cargo API client
export async function fetchHBFTracking(trackingNumber: string) {
    const formData = new URLSearchParams({
      actionData: JSON.stringify({
        action: "deliveryTrackAction",
        method: "getTrackList"
      }),
      requestData: JSON.stringify({
        no: trackingNumber,
        delivery_type: "0"
      }),
      className: "deliveryTrackAction",
      methodName: "getTrackList",
      rand: new Date().toISOString()
    });
  
    const response = await fetch('https://www.hbfcargo.com/action.do', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
        'Origin': 'https://www.hbfcargo.com',
        'Referer': 'https://www.hbfcargo.com/'
      },
      body: JSON.stringify({"actionData":{"action":"deliveryTrackAction","method":"getTrackList"},"requestData":{"no":trackingNumber,"delivery_type":"0"},"className":"deliveryTrackAction","methodName":"getTrackList","rand":"2025-01-02T03:18:52.438Z"})
    });
  
    if (!response.ok) {
      throw new Error(`HBF API error: ${response.status} ${response.statusText}`);
    }
  
    return response.json();
  }