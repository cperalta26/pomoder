import React from "react";
import styled from "styled-components";
import Button from "./Button";

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
    <Button />
  </Container>
);

export default PomoderContainer;