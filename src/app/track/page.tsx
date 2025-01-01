import TrackingForm from '@/components/TrackingForm';

export default function TrackPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Cek Resi HBF Cargo
        </h1>
        <TrackingForm />
      </div>
    </main>
  );
}