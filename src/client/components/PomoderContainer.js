import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  color: #FFFFFF;
  margin: 0 5vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 10% repeat(1fr);
`;

const PomoderContainer = (props) =>  (
  <Container> 
    <h1>Pomoder</h1>
    <Button btnColor={'#645DE9'}/>
    <Button btnColor={'#645DE9'}/>
    <Button btnColor={'#645DE9'}/>
    <Button btnColor={'#645DE9'}/>
    <Button btnColor={'#645DE9'}/>
    <Button btnColor={'#645DE9'}/>
  </Container>
);

export default PomoderContainer;