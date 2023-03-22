/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Hero1.css";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import { TiMediaPlayReverse } from "react-icons/ti";
import { BsPrinter } from "react-icons/bs";

let image = require("../images/Hero.png");
export function Hero1() {
  return (
    <div className="hero1">
      <img src={image} alt="" />
      <div className="social-links">
        <ul className="links">
          <li className="link">
            <a href="https:www.twitter.com" target="_blank" rel="noreferrer">
              <GrTwitter />
            </a>
          </li>
          <li className="link">
            <a href="https:www.facbook.com" target="_blank" rel="noreferrer">
              <GrFacebookOption />
            </a>
          </li>
          <li className="link">
            <a href="https:www.instagram.com" target="_blank" rel="noreferrer">
              <GrInstagram />
            </a>
          </li>
          <li className="link">
            <a href="" target="_blank" rel="noreferrer">
              <BsPrinter />
            </a>
          </li>
          <li className="link">
            <a href="" target="_blank" rel="noreferrer">
              <TiMediaPlayReverse />
            </a>
          </li>
        </ul>
      </div>
      <div className="tips">
        <div>
          <button className="button">pro tips</button>
        </div>
        <div>
          <p className="p1">Scroll down to learn more about Teepz</p>
        </div>
      </div>
    </div>
  );
}
