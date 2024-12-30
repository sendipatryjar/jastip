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
              Jastip <br /> Produk China
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Sekarang kamu bisa dengan mudah membeli barang di china, seperti Taobao, 1688, Alibaba, Aliexpress, dan lain-lain.
            </Typography>
            {/* <Typography className="mb-4" color="white" variant="h6">
              Get the app
            </Typography> */}
            {/* <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                App Store
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Google Play
              </Button>
            </div> */}
          </div>
          <Image
            width={700}
            height={200}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full w-30 max-h-[30rem] -translate-y-32 md:max-h-[50rem] lg:my-0 lg:ml-auto lg:max-h-[60rem] lg:translate-y-0"
          />
        </div>
        </Fade>
      </header>
    
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
      <Fade direction={'bottom-right'} delay={500} cascade damping={1e-1} triggerOnce={true}>
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Ecommerce App
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond
          </Typography>
        </div>
        </Fade>
      </div>
     
    </div>
  );
}
export default Hero;
