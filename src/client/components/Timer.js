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
`;

const Timer = () => (
  <StyledTimer viewBox="0 0 50 50">
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
  </StyledTimer>
);

export default Timer;
