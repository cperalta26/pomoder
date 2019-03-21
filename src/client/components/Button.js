import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 85%;
	height: 0%;
	padding-bottom: 80%;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 3px solid ${props => props.color};
  overflow: hidden;
  transition: 1s background;

  &:hover {
    background: linear-gradient(45deg, ${props => props.color}, #d9daeb);
    border: 3.5px solid ${props => props.color};
    transform: scale(1.1);
  }
`;

const StyledText = styled.div`
  color: #fff;
  line-height: 1em;
  font-family: 'Karla', sans-serif;
  font-weight: 900;
  font-size: 18px;
  padding: 40% 0%;

  @media (max-width: 630px) {
    font-size: 15px;
  }

  @media (max-width: 530px) {
    font-size: 10px;
  }
`;

const Button = ({btnColor, name, newCountdownTime, handleClick}) => (
  <StyledButton color={btnColor} onClick={() => handleClick(newCountdownTime, btnColor, name)}>
    <StyledText>
      {name}
    </StyledText>
  </StyledButton>
);

export default Button;
