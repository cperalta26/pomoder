import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #FFFFFF;
  margin: 0 5vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 80%;
`;

const PomoderContainer = (props) =>  (
  <Container> 
    <h1>Pomoder</h1>
  </Container>
);

export default PomoderContainer;