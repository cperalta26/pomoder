import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-align: center;
`;

const Button = () => (
  <StyledButton>
    <h1>Pomoder</h1>
  </StyledButton>
);

export default Button;