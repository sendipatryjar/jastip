import { Navbar } from '@/components';
import TrackingForm from '@/components/TrackingForm';

export default function TrackPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#b9aeef] to-[#8e82e8] py-20 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-8 text-center">
          Cek Resi China
        </h1>
        <TrackingForm />
      </div>
    </main>
    </>
   
  );
}