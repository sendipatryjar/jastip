"use client"
import { useState } from 'react';
import TrackingResult from './TrackingResult';
import { TrackingData } from  '@/utils/types';

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTrackingData(null);

    try {
      const response = await fetch('https://www.hbfcargo.com/action.do', {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Accept-Language': 'en-GB,en;q=0.5',
            'Content-Type': 'application/json;charset=utf-8',
            'Origin': 'https://www.hbfcargo.com',
            'Referer': 'https://www.hbfcargo.com/',
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Max-Age': '86400'
        },
        body:JSON.stringify({
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
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch tracking data');
      }

      setTrackingData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="tracking-number" className="block text-sm font-medium text-gray-700">
            Nomor Resi
          </label>
          <input
            type="text"
            id="tracking-number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Masukkan nomor resi"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Mencari...' : 'Cek Resi'}
        </button>

        {error && (
          <div className="text-red-600 text-sm mt-2">
            {error}
          </div>
        )}

        {trackingData && <TrackingResult data={trackingData} />}
      </form>
    </div>
  );
}