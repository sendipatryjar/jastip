export const fetchTrackingData = async (trackingNumber: string) => {
    return await fetch('https://www.hbfcargo.com/action.do', {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Accept-Language': 'en-GB,en;q=0.5',
        'Content-Type': 'application/json;charset=utf-8',
        'Origin': 'https://www.hbfcargo.com',
        'Referer': 'https://www.hbfcargo.com/',
        'X-Requested-With': 'XMLHttpRequest'
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
  };