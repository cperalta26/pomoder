import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-align: center;
  font-size: 18px;

  width: 95%;
	height: 0%;
	padding-bottom: 90%;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 3px solid ${props => props.color};
  color: #fff;
`;

const Button = ({btnColor, name}) => (
  <StyledButton color={btnColor}>{name}</StyledButton>
);

export default Button;