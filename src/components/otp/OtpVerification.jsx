import React from "react";
import styled from "styled-components";
import Verify from "./Verify";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(37, 43, 59, 0.6);
  margin: 0;
  padding: 0;
  display: flex;
`;
const StyledContainer2 = styled.div`
  position: absolute;
  flex-direction: column;
  top: 0;
  right: 0;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 18px;
  // background: #2b6350;
  width: ${(props) => props.inputWidth};
  height: ${(props) => props.inputHeight};
`;
const StyledContainer3 = styled.div`
  position: absolute;
  margin: 21px;
  width: 51vw;
  height: 55vh;
  // background: #fff;
  // box-shadow: 0px 4px 59px rgb(0 0 0 / 25%);
  // border-radius: 17px;
`;
const StyledYo = styled.div`
  display: flex;
  justify-content: center;
  width: 104vw;
  height: 98vh;
  align-items: center;
`;
function OtpVerification() {
  return (
    <StyledContainer>
      <StyledYo>
        <StyledContainer3>
          <StyledContainer2 inputWidth="359px" inputHeight="303px">
            <Verify />
          </StyledContainer2>
        </StyledContainer3>
      </StyledYo>
    </StyledContainer>
  );
}

export default OtpVerification;
