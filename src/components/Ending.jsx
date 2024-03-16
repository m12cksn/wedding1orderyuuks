import React from "react";
import BackgroundImage from "./BackgroundImage";
import { berkshire } from "@/app/fonts";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";
import Image from "next/image";
import TopLeft from "./ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import { useState, useEffect } from "react";

const Ending = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  return (
    <div className="flex justify-center" id="ending">
      <BackgroundImage bgImage="/images/bghero.jpg">
        <div>
          <h1
            className={`${berkshire.className} text-3xl  text-slate-700 text-center mb-4`}
          >
            Kirim Angpao Online
          </h1>
          <div className="relative">
            <Image
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="max-w-sm"
              src="/images/bca.jpg"
              width={500}
              height={500}
            />
            <div className="w-full backdrop-filter backdrop-blur-lg bg-white/10 bg-center p-5 mt-3 flex justify-between  gap-3 absolute -top-3 inset-y-0">
              <div>
                <Image
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="w-12 mt-4"
                  src="/images/pin.png"
                  width={500}
                  height={500}
                />
                <div className="mt-24 ">
                  <h1
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="text-lg text-slate-700"
                  >
                    Namdosan
                  </h1>
                  <h1
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="text-lg text-slate-700"
                  >
                    xxx-xxx-xxx-xxx
                  </h1>
                </div>
              </div>
              <Image
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="w-28 h-20 dropshadow-xl"
                src="/images/logobca.png"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div>
            <Image
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="max-w-xs mt-10 xl:w-[30rem] animate-wiggle animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both mb-7 mx-auto"
              src="/images/heroimage.png"
              width={1000}
              height={1000}
              alt="Cruise"
              priority={true}
            />
          </div>
          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="max-w-sm text-center text-slate-500"
          >
            Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti
            bagi kami.
          </p>
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-2xl mt-3 text-slate-700 text-center mb-4`}
          >
            Namdosan & Seodalmi
          </h1>
        </div>

        <TopLeft />
        <TopRight />
        <BtmLeft />
        <BtmRight />
      </BackgroundImage>
    </div>
  );
};

export default Ending;
