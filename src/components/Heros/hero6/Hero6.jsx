import "./Hero6.css";
import AllidOil from "../images/AllidOil.svg";
import KFCLogo from "../images/KFCLogo.svg";
export function Hero6() {
  let vivo = require("../images/Vivo_Energy-Logo.png");
  return (
    <div className="hero6">
      <h2 className="partners item">our partners</h2>
      <div className="hero-img item">
        <img src={AllidOil} alt="" />
        <img src={KFCLogo} alt="" />
        <img src={vivo} alt="" />
      </div>
    </div>
  );
}
