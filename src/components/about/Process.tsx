import React from "react";
import { Fade } from "react-awesome-reveal";

const steps = [
  {
    number: "01",
    title: "Pilih Produk",
    description: "Pilih produk yang Anda inginkan dari marketplace China",
  },
  {
    number: "02",
    title: "Kirim Link",
    description: "Kirimkan link produk melalui WhatsApp atau marketplace kami",
  },
  {
    number: "03",
    title: "Konfirmasi Harga",
    description: "Kami akan menghitung total biaya termasuk ongkir dan admin",
  },
  {
    number: "04",
    title: "Pembayaran",
    description: "Lakukan pembayaran sesuai dengan metode yang tersedia",
  },
];

export function Process() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Cara Order</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Fade
                direction={"left"}
                delay={300}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <div className="text-5xl font-bold text-purple-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-purple-100 -z-10"></div>
                )}
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
