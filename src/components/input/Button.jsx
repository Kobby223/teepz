import styled from "styled-components";
import { NavLink } from "react-router-dom";

export function Button({ content }) {
  return <StyledButton>
    <NavLink exact to="/homea">
      {content}
    </NavLink>
    </StyledButton>;
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;