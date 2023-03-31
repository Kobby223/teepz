import { NavLink } from "react-router-dom";
import { GrFacebookOption, GrTwitter, GrYoutube } from "react-icons/gr";

import "./Footer.css";
function Footer() {
  var today = new Date();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4 className="footer-head">Gratuility Mobilizer</h4>
              <p className="footer-para">
                Excel comp makes the pesky task of file manipulation and storage
                easy even for the oldest of senior citizens.
              </p>
              <div className="social">
                <NavLink exact to="/homea">
                  <GrFacebookOption />
                </NavLink>
                <NavLink exact to="/homeq">
                  <GrTwitter />
                </NavLink>
                <NavLink exact to="/homew">
                  <GrYoutube />
                </NavLink>
              </div>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/m">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/m">
                    Rewards
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/m">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>ABC 123 STREET,</li>
                <li>Location Area</li>
                <li>01010101010</li>
                <li>example@email.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-col-1">
            <div className="privacy">
              <li>Privacy Policy</li>
            </div>
            <div className="copyRight">
              <li>
                Copyright <span>TeepZ </span>
                {today.getFullYear()}
              </li>
            </div>
            <div className="terms">
              <li>Terms and Conditions</li>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
