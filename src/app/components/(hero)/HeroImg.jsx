const HeroImg = () => {
  return (
    <div>
      <img src="/navy.png" alt="Navy" />

      <div className="color-icon-container">
        <div className="navy-color-icon"></div>
        <div className="mint-color-icon"></div>
        <div className="ocean-color-icon"></div>
      </div>

      <div>
        <img src="/navy.png" alt="Navy" />
        <img src="/mint.png" alt="Mint" />
        <img src="/ocean.png" alt="Ocean" />
      </div>
    </div>
  );
};

export default HeroImg;
