import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-align: center;
  font-size: 13px;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #645DE9;
  border: 3px solid #645DE9;
  padding: 3px 3px;
  color: #fff;
`;

const Button = () => (
  <StyledButton>Pomodoro</StyledButton>
);

export default Button;