import React from "react";
import Image from "next/image";

const PauseButton = () => {
  return (
    <div>
      {" "}
      <Image
        className="w-14"
        src="/images/pause.png"
        width={1000}
        height={1000}
        alt="Cruise"
        priority={true}
      />
    </div>
  );
};

export default PauseButton;
