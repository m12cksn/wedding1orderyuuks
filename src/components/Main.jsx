import React from "react";
import { berkshire } from "@/app/fonts";
import Image from "next/image";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import TopLeft from "@/components/ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";

import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const Main = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  return (
    <div id="main" className="flex justify-center">
      <div
        className="bg-[url('/images/bghero.webp')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-40 w-full flex justify-center items-center overflow-hidden"
        id="main-section"
      >
        <div>
          <Image
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-80  animate-wiggle animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both "
            src="/images/mainimg.webp"
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-slate-900 text-xl text-center mb-2`}
          >
            The Wedding of
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-4xl text-slate-900 text-center mb-2`}
          >
            Dosan & Dalmi
          </h2>
          <Timer />
        </div>
        <TopLeft />
        <TopRight />
        <BtmLeft />
        <BtmRight />
      </div>
    </div>
  );
};

export default Main;
