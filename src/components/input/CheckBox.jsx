import styled from "styled-components";
export function CheckBox({ type }) {
  return <StyledInput type={type}  />;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
//   position: relative;
  top: 100%;
//   left: -800%;
//   width: 80%;
//   height: 3rem;
  padding: 0.5rem;
  margin-top: 20px;
  margin-right: 10px;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
   
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
  }
  
`;
