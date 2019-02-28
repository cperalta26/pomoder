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
      countdownTime: {
        minutes: 25,
        seconds: 38
      },
      countdownTimeColor: '#645DE9'
    };
    this.changeCountdownTime = this.changeCountdownTime.bind(this);
  }
  
  changeCountdownTime({minutes, seconds}, color){
    // console.log('changeCountdown called minutes ' + minutes + ' seconds ' + seconds )
    if (!(minutes === null)) {
      this.setState({
        countdownTime: {
          minutes,
          seconds
        },
        countdownTimeColor: color
      });

      this.decreaseTime(minutes, seconds)
    }
    //console.log('this is the state' + JSON.stringify(this.state))
  }

  decreaseTime(minutes, seconds){
    let minutesLeft = minutes;
    let secondsLeft = seconds;
    
    const timer = () => {
      console.log('timer called')
      console.log('this is the state' + JSON.stringify(this.state))
     /*  minutesLeft = secondsLeft === '00' ? minutesLeft - 1 : minutesLeft;
      secondsLeft = secondsLeft === '00' ? 59 : secondsLeft - 1; */
      //console.log('time inside ', minutesLeft, secondsLeft)
      if (secondsLeft === '00' || secondsLeft === 0) {
        minutesLeft = minutesLeft - 1;
        secondsLeft = 59;
      } else {
        secondsLeft = secondsLeft - 1;
      }
      this.setState((prevState, props) => {
        return {
          countdownTime: {
            minutes: minutesLeft,
            seconds: secondsLeft
        }}
      })
      if (this.state.countdownTime.minutes === 0 && this.state.countdownTime.seconds === 0) {
        clearInterval(timerId)
      }
    }
    console.log('time outside ', minutesLeft, secondsLeft)
    const timerId = setInterval( () => {timer()}, 1000)
    
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
              newCountdownTime={{minutes: 25, seconds: '00'}}
              changeCountdownTime={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='2' gridCol='1'>
            <Button
              btnColor='#B73FF3'
              name='Long Break'
              newCountdownTime={{minutes: 10, seconds: '00'}}
              changeCountdownTime={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='3' gridCol='1'>
            <Button
              btnColor='#F75789'
              name='Short Break'
              newCountdownTime={{minutes: 1, seconds: '00'}} 
              changeCountdownTime={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='1' gridCol='3' location='end'>
            <Button
              btnColor='#2BBABD'
              name='Start'
              newCountdownTime={{minutes: null, seconds: null}}
              changeCountdownTime={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='2' gridCol='3' location='end'>
            <Button
              btnColor='#F5243E'
              name='Stop'
              newCountdownTime={{minutes: null, seconds: null}}
              changeCountdownTime={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='3' gridCol='3' location='end'>
            <Button
              btnColor='#3AB9EC' 
              name='Reset'
              newCountdownTime={{minutes: null, seconds: null}}
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
