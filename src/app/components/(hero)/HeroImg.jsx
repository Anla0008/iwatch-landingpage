"use client";
import { useState } from "react";
import Image from "next/image";

const HeroImg = () => {
  const [wactchColor, setWatchColor] = useState("/navy.png");

  return (
    <div className="hero-layout-container">
      <div className="hero-choose-img">
        <Image src={wactchColor} alt="Navy picture watch" width={500} height={500} />

        <div className="color-icon-container">
          <div className={wactchColor == "/navy.png" ? "active navy-color-icon" : "navy-color-icon"} onClick={() => setWatchColor("/navy.png")}></div>
          <div className={wactchColor == "/mint.png" ? "active mint-color-icon" : "mint-color-icon"} onClick={() => setWatchColor("/mint.png")}></div>
          <div className={wactchColor == "/ocean.png" ? "active ocean-color-icon" : "ocean-color-icon"} onClick={() => setWatchColor("/ocean.png")}></div>
        </div>
      </div>

      <div className="icon-swatches">
        <Image width={500} height={500} className="pic1" src="/navy.png" alt="Navy" onClick={() => setWatchColor("/navy.png")} />
        <Image width={500} height={500} className="pic2" src="/mint.png" alt="Mint" onClick={() => setWatchColor("/mint.png")} />
        <Image width={500} height={500} className="pic3" src="/ocean.png" alt="Ocean" onClick={() => setWatchColor("/ocean.png")} />
      </div>
    </div>
  );
};

export default HeroImg;
