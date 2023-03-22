import "./Hero3.css";
import teepit from "../images/teepit.svg";
import CopyFile from "../images/CopyFile.svg";

export function Hero3() {
  let image = require("../images/WhyUsImage.png");
  return (
    <div className="hero3">
      <h2 className="hero3-heading">
        Create, Receive and Track your tips - all in <span>one Place</span>
      </h2>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-6">
            <img className="tip-image rounded" src={image} alt="" />
            <div className="small-box">
              <p className="small-box-text">
                Teepz helps you keep proper record of all your tips
              </p>
              <img src={CopyFile} alt="" />
            </div>
          </div>
          <div className="col-6  h-100 rounded hero3-msg">
            <h3 className="hero-box-heading">Why Us?</h3>
            <p className="hero-box-para">
              Lorem ipsum dolor sit amet consectetur. Cursus vestibulum sit mi
              suspendisse sed eleifend. Lorem ipsum dolor sit amet consectetur.
              Cursus vestibulum sit mi suspendisse sed eleifend.
            </p>
            <button className="premium">
              <img src={teepit} alt="" /> Get Premium
            </button>
          </div>
        </div>
        {/* <div>
          <img className="tip-image" src={image} alt="" />
          <div className="small-box">
            <p className="small-box-text">
              Teepz helps you keep proper record of all your tips
            </p>
            <img src={CopyFile} alt="" />
          </div>
        </div> */}
        {/* <div className="hero3-msg">
          <h3 className="hero-box-heading">Why Us?</h3>
          <p className="hero-box-para">
            Lorem ipsum dolor sit amet consectetur. Cursus vestibulum sit mi
            suspendisse sed eleifend. Lorem ipsum dolor sit amet consectetur.
            Cursus vestibulum sit mi suspendisse sed eleifend.
          </p>
          <button className="premium">
            <img src={teepit} alt="" /> Get Premium
          </button>
        </div> */}
      </div>
    </div>
  );
}
