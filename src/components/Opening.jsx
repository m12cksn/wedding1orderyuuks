"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { berkshire } from "@/app/fonts";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import TopLeft from "./ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";

// import { animate_pulse } from "tailwindcss-animated";

const Opening = ({ onButtonClick }) => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="flex justify-center">
      <div className="bg-[url('/images/gallery/image2.webp')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-40 w-full flex h-screen justify-center items-center overflow-hidden">
        <div className="bg-black opacity-50 backdrop-filter backdrop-blur-2xl h-screen w-full absolute"></div>
        <div>
          <div className="bg-white/90 backdrop-filter backdrop-blur-sm max-w-xs opacity-80 p-5">
            <h1
              className={`${berkshire.className} xl:text-3xl text-slate-900 text-xl text-center mb-5`}
            >
              The Wedding of
            </h1>
            <h2
              className={`${berkshire.className} text-4xl xl:text-5xl text-slate-900 text-center mb-7`}
            >
              Dosan & Dalmi
            </h2>
            <Image
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="w-80 xl:w-[30rem] animate-wiggle animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both mb-5"
              src="/images/heroimage.webp"
              width={1000}
              height={1000}
              alt="Cruise"
              priority={true}
            />
            <div className="w-full flex mb-3 justify-center">
              <button
                onClick={onButtonClick}
                className="bg-indigo-500 px-11 shadow mx-auto py-2 rounded text-white tracking-wider"
              >
                Buka Undangan{" "}
              </button>
            </div>
            <h1 className=" text-slate-900 mb-1 text-lg text-center ">
              Kepada
            </h1>
            <h1 className=" text-slate-900 mb-2 text-lg text-center ">
              Bapak / Ibu / Saudara / i
            </h1>
            <h1 className="text-slate-500  text-lg text-center ">
              Teman dari Mempelai
            </h1>
          </div>
          <TopLeft />
          <TopRight />
          <BtmLeft />
          <BtmRight />
        </div>
      </div>
    </div>
  );
};

export default Opening;
