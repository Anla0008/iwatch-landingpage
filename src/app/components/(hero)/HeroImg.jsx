"use client";
import { useState } from "react";
import Image from "next/image";

const HeroImg = () => {
  const [wactchColor, setWatchColor] = useState("/navy.png");

  return (
    <div className="hero-layout-container grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="hero-choose-img flex flex-col items-center">
        <Image src={wactchColor} alt="Navy picture watch" width={500} height={500} />

        <div className="color-icon-container flex flex-col gap-8 items-center">
          <div className={`w-6 h-6 border-2 border-white rounded-full cursor-pointer${wactchColor == "/navy.png" ? "active navy-color-icon" : "navy-color-icon"} `} onClick={() => setWatchColor("/navy.png")}></div>
          <div className={`${wactchColor == "/mint.png" ? "active mint-color-icon" : "mint-color-icon"} mint-color-icon w-6 h-6 border-2 border-white rounded-full cursor-pointer`} onClick={() => setWatchColor("/mint.png")}></div>
          <div className={`${wactchColor == "/ocean.png" ? "active ocean-color-icon" : "ocean-color-icon"} ocean-color-icon w-6 h-6 border-2 border-white rounded-full cursor-pointer`} onClick={() => setWatchColor("/ocean.png")}></div>
        </div>
      </div>

      <div className="icon-swatches grid grid-cols-3 gap-2.5">
        <Image width={500} height={500} className="pic1 rounded-lg" src="/navy.png" alt="Navy" onClick={() => setWatchColor("/navy.png")} />
        <Image width={500} height={500} className="pic2 rounded-lg" src="/mint.png" alt="Mint" onClick={() => setWatchColor("/mint.png")} />
        <Image width={500} height={500} className="pic3 rounded-lg" src="/ocean.png" alt="Ocean" onClick={() => setWatchColor("/ocean.png")} />
      </div>
    </div>
  );
};

export default HeroImg;
