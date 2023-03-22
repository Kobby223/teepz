import React from 'react'
import styled from "styled-components";
import { CheckBox } from "../input/CheckBox";

export const Text = () => {
  return (
    <StyledText>
         <CheckBox type="checkbox"/>
        Remember Me</StyledText>
  )
}

const StyledText = styled.h3`
    font-size: 10px;
    // width: 0px;
    text-transform: lowercase;
    // display: relative;
    // top: 10%;
    // margin-top: 22px;
    // margin-left: 2px;
    
    z-index: 100;
    letter-spacing: 3;
`;