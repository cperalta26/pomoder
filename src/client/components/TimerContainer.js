import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #FFFFFF;
  margin: 0 5vw;
  height: 100vh;
  border-style: solid;
  border-color: yellow;
  border-weight: 3px;
`;

const TimerContainer = (props) =>  (
  <Wrapper> 
    <h1>Pomoder</h1>
  </Wrapper>
);

export default TimerContainer;