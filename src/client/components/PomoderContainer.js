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
    <Button btnColor={'#645DE9'} name={'Pomodoro'}/>
    <Button btnColor={'#B73FF3'} name={'Long Break'}/>
    <Button btnColor={'#F75789'} name={'Short Break'}/>
    <Button btnColor={'#2BBABD'} name={'Start'}/>
    <Button btnColor={'#F5243E'} name={'Stop'}/>
    <Button btnColor={'#3AB9EC'} name={'Reset'}/>
  </Container>
);

export default PomoderContainer;