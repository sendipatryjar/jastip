"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";
import FeatureCard from "./feature-card";
import { FEATURES } from "./feature-data";

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Fade direction="up" triggerOnce={true}>
          <Typography color="blue-gray" className="mb-2 font-bold uppercase">
            Layanan Kami
          </Typography>
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Keunggulan Jasa Titip Kami
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8"
          >
            Nikmati kemudahan berbelanja produk China dengan layanan jasa titip yang aman, 
            terpercaya, dan profesional. Kami siap membantu Anda mendapatkan produk impian 
            dari marketplace China terbaik.
          </Typography>
        </Fade>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <Fade key={idx} direction="up" delay={idx * 100} triggerOnce={true}>
            <FeatureCard {...props} />
          </Fade>
        ))}
      </div>
    </section>
  );
}

export default Features;