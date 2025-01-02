import React from 'react';
import { Fade } from "react-awesome-reveal";
const features = [
  {
    icon: "🚀",
    title: "Pengiriman Cepat",
    description: "Estimasi pengiriman 10-14 hari kerja via jalur udara"
  },
  {
    icon: "💎",
    title: "Produk Berkualitas",
    description: "Pemilihan supplier terpercaya dengan kualitas terjamin"
  },
  {
    icon: "💰",
    title: "Harga Kompetitif",
    description: "Biaya admin yang terjangkau dengan layanan maksimal"
  },
  {
    icon: "🤝",
    title: "Pelayanan Prima",
    description: "Respon cepat dan bantuan konsultasi produk"
  }
];

export function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
             <Fade
             direction={"right"}
             delay={200}
             cascade
             damping={1e-1}
             triggerOnce={true}
           >
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}