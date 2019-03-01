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
      countdownTimeColor: '#645DE9',
      timer: false
    };
    this.changeCountdownTime = this.changeCountdownTime.bind(this);
    this.timer = this.timer.bind(this);
    this.calculateDuration = this.calculateDuration.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }
  
  changeCountdownTime({minutes, seconds}, color){
    if (!(minutes === null)) {
      this.setState(prevState => ({
        countdownTime: {
          minutes,
          seconds
        },
        countdownTimeColor: color,
        timer: !prevState.timer
      }));

      this.startTimer()
    }
  }

  timer() {
    const duration = this.calculateDuration();
    const minutesLeft = Math.floor(duration / 60);
    const secondsLeft = duration % 60;
     console.log(`duration: ${duration}, minutesLeft: ${minutesLeft}, secs: ${secondsLeft}`);
    
    if (minutesLeft < 0 && secondsLeft < 0) clearInterval(timerId)
    
    this.updateTime(minutesLeft, secondsLeft);
  }
    
  calculateDuration() {
    const {minutes, seconds} = this.state.countdownTime;
    return ((parseInt(minutes * 60, 10)) + parseInt(seconds, 10)) - 1;
  }
  
  startTimer(){
    const timerId = setInterval(this.timer, 1000);
  }

  updateTime(minutes, seconds) {
    this.setState({
      countdownTime: {
        minutes,
        seconds
      }
    });
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
            {
              !this.state.timer ? <h1>Regular Time</h1>
              :
              <Timer
                countdownTime={this.state.countdownTime}
                countdownTimeColor={this.state.countdownTimeColor}
              />
            }
          </GridLocation>
        </TimerAndButtonsContainer>
      </Container>
    );
  }
};
