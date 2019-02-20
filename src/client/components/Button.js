import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-align: center;
  font-size: 13px;
`;

const Button = () => (
  <StyledButton>Pomodoro</StyledButton>
);

export default Button;