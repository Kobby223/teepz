import "./Verify.css";
import React, { useState } from "react";
// import OTPInput from "react-otp-input";
import OTPInput, { ResendOTP } from "otp-input-react";
// import styled from "styled-components";

function Verify() {
  const [otp, setOpt] = useState("");
  function handleChange(otp) {
    setOpt(otp);
  }

  return (
    <div className="verifyContainer">
      <p className="p1">OTP Verification</p>
      <p className="p2">Enter code received on phone to proceed</p>
      <div className="otpElements">
        <div className="otp">
          <OTPInput
            onChange={handleChange}
            value={otp}
            inputStyle="inputStyle"
            // numInputs={6}
            OTPLength={4}
            seperator={<span></span>}
            // autoFocus="false"
            otpType="number"
            // disabled={false}
            // secure
          />
        </div>
      </div>
      <div className="btn">
        {/* <ResendOTP
          className="resend"
          onResendClick={() => console.log("resend clicked")}
        /> */}

        <button type="submit">Confirm Number</button>
      </div>
    </div>
  );
}
export default Verify;
