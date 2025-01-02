import React from 'react';
import { Fade } from 'react-awesome-reveal';

export function Contact() {
  return (
    <Fade
    direction={"up"}
    delay={300}
    cascade
    damping={1e-1}
    triggerOnce={true}
  >
    <div className="bg-gradient-to-r from-purple-600 to-indigo-700 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Hubungi Kami</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <a href="https://wa.me/your-number" className="flex items-center bg-white px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            <span className="text-2xl mr-2">📱</span>
            <span className="font-medium">WhatsApp</span>
          </a>
          <a href="https://tokopedia.com/your-store" className="flex items-center bg-white px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            <span className="text-2xl mr-2">🛍️</span>
            <span className="font-medium">Tokopedia</span>
          </a>
          <a href="https://shopee.com/your-store" className="flex items-center bg-white px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            <span className="text-2xl mr-2">🛒</span>
            <span className="font-medium">Shopee</span>
          </a>
        </div>
      </div>
    </div>
    </Fade>
  );
}