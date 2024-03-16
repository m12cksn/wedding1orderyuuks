import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    img: "/images/house2.png",
    link: "#main",
  },
  {
    img: "/images/couple.png",
    link: "#section2",
  },
  {
    img: "/images/calendar.png",
    link: "#date",
  },
  {
    img: "/images/picture.png",
    link: "#gallery",
  },
  {
    img: "/images/giftbox.png",
    link: "#ending",
  },
  {
    img: "/images/chat.png",
    link: "#rsvp",
  },
];

const Bar = () => {
  return (
    <div className="max-w-xs backdrop-filter backdrop-blur-lg bg-white/50 fixed bottom-0 flex gap-5 p-2 mx-auto left-1/2 -translate-x-1/2">
      {images.map((image, index) => (
        <Link href={image.link} className=" rounded opacity-100 shadow p-2">
          {" "}
          <Image
            className="w-12"
            src={image.img}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
        </Link>
      ))}
    </div>
  );
};

export default Bar;
