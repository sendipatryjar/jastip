"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-[#b9aeef] px-8">
        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
          <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
            <div className="col-span-1">
              <Typography variant="h1" color="white" className="mb-4">
                Jasa Titip <br /> Produk China
              </Typography>
              <Typography
                variant="lead"
                className="mb-7 !text-white md:pr-16 xl:pr-28"
              >
                Dapatkan produk berkualitas dari marketplace China terpercaya seperti Taobao, 1688, Alibaba, dan Aliexpress dengan mudah dan aman. Kami bantu Anda dari pemilihan hingga pengiriman ke Indonesia.
              </Typography>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                Mulai Belanja Sekarang
              </Button>
            </div>
            <Image
              width={700}
              height={500}
              src="/image/iphones.png"
              alt="Online shopping illustration"
              className="col-span-1 my-20 h-full w-30 max-h-[30rem] -translate-y-32 md:max-h-[50rem] lg:my-0 lg:ml-auto lg:max-h-[60rem] lg:translate-y-0"
            />
          </div>
        </Fade>
      </header>
    
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <Fade direction={'bottom-right'} delay={500} cascade damping={1e-1} triggerOnce={true}>
          <div>
            <Typography variant="h3" color="blue-gray" className="mb-3">
              Mengapa Memilih Kami?
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-gray-500 lg:w-5/12"
            >
              Kami menyediakan layanan jasa titip yang aman dan terpercaya, dengan pengalaman bertahun-tahun dalam menangani pembelian dan pengiriman produk dari China ke Indonesia.
            </Typography>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;