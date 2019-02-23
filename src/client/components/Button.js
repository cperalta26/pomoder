import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-align: center;
  font-size: 18px;

  width: 115px;
  height: 115px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 3px solid ${props => props.color};
  padding: 3px 3px;
  color: #fff;
`;

const Button = ({btnColor, name}) => (
  <StyledButton color={btnColor}>{name}</StyledButton>
);

export default Button;