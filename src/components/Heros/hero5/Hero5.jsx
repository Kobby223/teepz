import "./Hero5.css";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import teepit from "../images/teepit.svg";
export function Hero5() {
  let image = require("../images/Testimonials.png");
  return (
    <div className="hero5">
      <h2 className="testi">Testimonials</h2>
      <div className="testimonials">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h5 className="name">Caleb Eli</h5>
          <h6 className="chicken">Chicken Man</h6>
          <p className="message">
            Lorem ipsum dolor sit amet consectetur. Cursus vestibulum sit mi
            suspendisse sed eleifend. Lorem ipsum dolor sit amet consectetur.
            Cursus vestibulum sit mi suspendisse sed eleifend.
          </p>
          <div className="social">
            <NavLink exact to="/homea">
              <HiArrowSmLeft />
            </NavLink>
            <NavLink exact to="/homeq">
              <HiArrowSmRight />
            </NavLink>
          </div>
          <button className="custom">
            <img src={teepit} alt="" /> Get Customised Teepz Code
          </button>
          <h6 className="chicken">Examples</h6>
          <div className="examples">
            <p className="example">Stoneboy</p>
            <p className="example">ChickenMan</p>
            <p className="example">AmaTee</p>
            <p className="example">JoanaWear</p>
          </div>
        </div>
      </div>
    </div>
  );
}
