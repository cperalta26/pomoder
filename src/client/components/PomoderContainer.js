import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #FFFFFF;
  margin: 0 5vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 80%;
`;

const PomoderContainer = (props) =>  (
  <Wrapper> 
    <h1>Pomoder</h1>
  </Wrapper>
);

export default PomoderContainer;