import React, {Component} from "react";
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
  grid-template-rows: repeat(3, 275px);
  grid-template-columns: minmax(0, 175px) minmax(200px, auto) minmax(0, 175px);
`;

const GridLocation = styled.div`
  display: grid;
  grid-row: ${props => props.gridRow ? props.gridRow : ''};
  grid-column: ${props => props.gridCol ? props.gridCol : ''};
  justify-items: ${props => props.location ? props.location : ''};
  align-items: center;
`;

export default class PomoderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdownTime: 25,
      countdownTimeColor: '#645DE9'
    };
    this.changeCountdownTime = this.changeCountdownTime.bind(this);
  }

  changeCountdownTime(newTime, color){
    if (!(newTime === null)) {
      this.setState({
        countdownTime: newTime,
        countdownTimeColor: color
      });
    }
  }

  render() {
    return(
      <Container> 
        <h1>Pomoder</h1>
        <TimerAndButtonsContainer>
          <GridLocation gridRow='1' gridCol='1'>
            <Button
              btnColor='#645DE9'
              name='Pomodoro'
              newCountdownTime={25}
              changeCountdownTime={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='2' gridCol='1'>
            <Button
              btnColor='#B73FF3'
              name='Long Break'
              newCountdownTime={10}
              changeCountdownTime={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='3' gridCol='1'>
            <Button
              btnColor='#F75789'
              name='Short Break'
              newCountdownTime={5} 
              changeCountdownTime={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='1' gridCol='3' location='end'>
            <Button
              btnColor='#2BBABD'
              name='Start'
              newCountdownTime={null}
              changeCountdownTime={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='2' gridCol='3' location='end'>
            <Button
              btnColor='#F5243E'
              name='Stop'
              newCountdownTime={null}
              changeCountdownTime={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='3' gridCol='3' location='end'>
            <Button
              btnColor='#3AB9EC' 
              name='Reset'
              newCountdownTime={null}
              changeCountdownTime={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='1/-1' gridCol='2' location='center'>
            <Timer {...this.state} />
          </GridLocation>
        </TimerAndButtonsContainer>
      </Container>
    );
  }
};
