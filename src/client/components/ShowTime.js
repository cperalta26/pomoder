import React from "react";
import styled from "styled-components";

const StyledTimer = styled.svg`
  & .fade-stop-1 {
    stop-color: #44479b; 
    stop-opacity: 100;
  }
  & .fade-stop-2 {
    stop-color: #1c1d3d;
    stop-opacity: 1;
  }
  
  & .circle {
    stroke: ${props => props.countdownTimeColor};
    fill: none;
    stroke-width: 0.5;
    stroke-linecap: round;
  }
  & .text {
    stroke: ${props => props.countdownTimeColor};
    stroke-width: 0.32;
    fill: #fff;
    font-size: 10px;
    font-family: Karla;
  }
`;

const ShowTime = ({countdownTime, countdownTimeColor}) => (
  <StyledTimer viewBox="0 0 50 50" countdownTimeColor={countdownTimeColor}>
    <defs>
      <radialGradient id="fade" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" className="fade-stop-1" />
        <stop offset="100%" className="fade-stop-2"/>
      </radialGradient>
    </defs>
    <circle
      cx="25"
      cy="25"
      r="20"
      fill= "url(#fade)"
      strokeWidth="4"
    />
    <path className="circle"
      d="M25 5
         a 20 20 0 0 1 0 40
         a 20 20 0 0 1 0 -40"
    />
    <text className="text"
      x="25"
      y="25"
      dy=".3em"
      textAnchor="middle"
    >
      {
        `${countdownTime.minutes < 10  ? 0 : ''}${countdownTime.minutes}
          :
          ${countdownTime.seconds < 10 ? 0: ''}${countdownTime.seconds}`
      }
    </text>
  </StyledTimer>
);

export default ShowTime;
