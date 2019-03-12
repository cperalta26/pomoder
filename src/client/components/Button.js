import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 85%;
	height: 0%;
	padding-bottom: 80%;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 3px solid ${props => props.color};
  overflow: hidden;
`;

const StyledText = styled.div`
  color: #fff;
  line-height: 1em;
  font-family: 'Karla', sans-serif;
  font-weight: 900;
  font-size: 18px;
  padding: 40% 0%;
`;

const Button = ({btnColor, name, newCountdownTime, handleClick}) => (
  <StyledButton color={btnColor} onClick={() => handleClick(newCountdownTime, btnColor, name)}>
    <StyledText>
      {name}
    </StyledText>
  </StyledButton>
);

export default Button;
