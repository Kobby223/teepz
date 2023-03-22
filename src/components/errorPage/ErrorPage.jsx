import "./ErrorPage.css";
import ErrorPageIcon from "./images/ErrorPage.svg";
import { HiArrowSmLeft } from "react-icons/hi";

import { Link } from "react-router-dom";
export function ErrorPage() {
  return (
    <div className="error-page">
      <div>
        <img src={ErrorPageIcon} alt="" />
      </div>
      <div className="error-content">
        <h3 className="error-head">Looks like you’re lost</h3>
        <p className="error-text">
          The page you’re looking for is not available
        </p>
        <div className="go-back">
          <div className="social">
            <Link exact to="">
              <HiArrowSmLeft />
            </Link>
          </div>
          <p className="go-back-text">Go back home</p>
        </div>
      </div>
    </div>
  );
}
