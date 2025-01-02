import { TrackingData } from '@/utils/types';
import { Typography } from '@material-tailwind/react';

interface TrackingResultProps {
  data: TrackingData;
}

export default function TrackingResult({ data }: TrackingResultProps) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Hasil Tracking</h2>
      <div className="border rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-50 space-y-4">
          {data?.data?.map((item: any, index: number) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <h3 className={`font-medium ${index === 0 ? 'text-orange-500' : 'text-blue-500'}`}>
                Tanggal: {item.create_date}
              </h3>
              <p className="mt-2 text-gray-700">
                Info: {item.status_text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}