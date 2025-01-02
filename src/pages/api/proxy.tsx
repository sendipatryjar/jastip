import Cors from 'cors';

// Inisialisasi middleware CORS
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

// Menjalankan middleware CORS
function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req: any, res: any) {
  // Menjalankan CORS middleware
  await runMiddleware(req, res, cors);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Parsing body dari request frontend
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const rawBody = Buffer.concat(buffers).toString();
    const parsedBody = JSON.parse(rawBody);  

    // Mengubah body ke format yang diperlukan oleh API eksternal
    const bodyNew = {
      actionData: {
        action: "deliveryTrackAction",
        method: "getTrackList"
      },
      requestData: {
        no: parsedBody.trackingNumber,  // Gunakan nomor resi yang diterima dari frontend
        delivery_type: "0"
      },
      className: "deliveryTrackAction",
      methodName: "getTrackList",
      rand: new Date().toISOString(),
    };

    // Mengirim request ke API eksternal
    const targetUrl = 'https://www.hbfcargo.com/action.do';
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify(bodyNew),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from external API:', errorText);
      return res.status(response.status).json({ error: 'Error from external API', details: errorText });
    }

    const data = await response.json();
    res.status(response.status).json(data);  // Mengirim respons ke frontend

  } catch (error: any) {
    console.error("Error details:", error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
