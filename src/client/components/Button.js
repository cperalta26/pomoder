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
  background-color: ${props => props.color};
  border: 3px solid ${props => props.color};
  padding: 3px 3px;
  color: #fff;
`;

const Button = () => (
  <StyledButton color="#645DE9">Pomodoro</StyledButton>
);

export default Button;