import { TrackingData } from '@/utils/types';

interface TrackingResultProps {
  data: TrackingData;
}

export default function TrackingResult({ data }: TrackingResultProps) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Hasil Tracking</h2>
      <div className="border rounded-lg overflow-hidden">
        <pre className="p-4 bg-gray-50 overflow-x-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}