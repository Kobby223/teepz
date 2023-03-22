import React from "react";
import "./MobileNumber.css";

const MobileNumber = () => {
  // const formCode = () =>
  // {

  // }

  return (
    <div className="container">
      <div className="box">
        <h3>Get The Teepz App</h3>
        <div className="text">
          Enter Your Momo Number to Receive Your Teepz.
        </div>
        <div className="btn">
          <div className="code">
            {/* <form id="login" onSubmit="process(event)">
              <input id="phone" type="tel" nme="phone" />
            </form> */}
          </div>
          <div className="number"></div>
          {/* <button>+233</button> */}
        </div>
      </div>
    </div>
  );
};

export default MobileNumber;
