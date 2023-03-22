import "./Hero2.css";
import SecretCode from "../images/SecretCode.svg";
import EasyToUse from "../images/EasyToUse.svg";
let image = require("../images/Untitled.png");

export function Hero2() {
  return (
    <div className="hero2">
      <h2 className="magic">The *1818# Teepz Magic</h2>
      <div className="wrapper">
        <div className="contents">
          <div className="content">
            <img src={SecretCode} alt="" />
            <h2 className="h2">Get you Teepz Secret Code</h2>
            <p className="p2">
              Go to <a href="www.teepz.net">www.teepz.net, </a> Click SIGN-UP or
              Get Teepz Code. Follow Instruction to get your Secret Teepz Code
            </p>
          </div>
          <div className="content">
            <img src={EasyToUse} alt="" />
            <h2 className="h2">How to Receive Teepz</h2>
            <p className="p2">
              Dial *1818#, Enter receivers Secret Teepz Code, Enter Amount to
              send, Enter Reference and Send.
            </p>
          </div>
        </div>
        <div className="image">
          <img className="iphone" src={image} alt="" />
          {/* <button className="circle1">+GHs30.00</button>
          <button className="circle2">
            <h6 className="circle2-head">Teepz:</h6>
            <p className="circle2-para">
              Set up multiple tip accounts with our premium features.
            </p>
          </button> */}
        </div>
      </div>
      <div className="teepitColored"></div>
    </div>
  );
}
