const HeroImg = () => {
  return (
    <div>
      <img src="/navy.png" alt="Navy" />

      <div className="color-icon-container">
        <div className="navy-color-icon"></div>
        <div className="mint-color-icon"></div>
        <div className="ocean-color-icon"></div>
      </div>

      <div className="icon-swatches">
        <img className="pic1" src="/navy.png" alt="Navy" />
        <img className="pic2" src="/mint.png" alt="Mint" />
        <img className="pic3" src="/ocean.png" alt="Ocean" />
      </div>
    </div>
  );
};

export default HeroImg;
