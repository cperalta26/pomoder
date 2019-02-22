import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Timer from "./Timer";

const Container = styled.div`
  color: #FFFFFF;
  margin: 0 5vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 4fr;
`;

const TimerAndButtonsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 2fr 1fr;
`;

const TimerGrid = styled.div`
  display: grid;
  grid-row: 1/-1;
  grid-column: 2;
`;

const PomoderContainer = (props) =>  (
  <Container> 
    <h1>Pomoder</h1>
    <TimerAndButtonsContainer>
      <Button btnColor='#645DE9' name='Pomodoro'/>
      <Button btnColor='#B73FF3' name='Long Break'/>
      <Button btnColor='#F75789' name='Short Break'/>
      <Button btnColor='#2BBABD' name='Start'/>
      <Button btnColor='#F5243E' name='Stop'/>
      <Button btnColor='#3AB9EC' name='Reset'/>
      <TimerGrid>
        <Timer/>
      </TimerGrid>
    </TimerAndButtonsContainer>
  </Container>
);

export default PomoderContainer;