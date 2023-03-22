import "./Hero9.css";
import GetStarted from "../images/GetStarted.svg";
export function Hero9() {
  return (
    <div className="hero9">
      <div className="content item">
        <h2 className="h1 item">Get Started with Teepz today</h2>
        <p className="p item">
          Lorem ipsum dolor sit amet consectetur. Cursus vestibulum sit mi
          suspendisse sed eleifend.
        </p>
        <button className="btn item">Get Started</button>
      </div>
      <div className="get-started item">
        <img src={GetStarted} alt="" />
      </div>
    </div>
  );
}
