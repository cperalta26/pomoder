import React, {Component} from 'react';
import styled from 'styled-components';
import {Howl} from 'howler';
import sound from '../../sounds/alarm_classic.mp3';
import Button from './Button';
import Timer from './Timer';
import ShowTime from './ShowTime';

const Container = styled.div`
  color: #FFFFFF;
  margin: 0 5vw;
  height: 100vh;
  display: grid;
  grid-template-rows: minmax(0, 75px) auto-fill;
`;

const StyledHeading = styled.div`
  font-family: 'Raleway', sans-serif;
  font-size: 22px;
  font-weight: 700;
  margin: 10px auto;
`;

const TimerAndButtonsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 205px);
  grid-template-columns: minmax(0, 170px) minmax(200px, auto) minmax(0, 170px);
`;

const GridLocation = styled.div`
  display: grid;
  grid-row: ${props => props.gridRow ? props.gridRow : ''};
  grid-column: ${props => props.gridCol ? props.gridCol : ''};
  justify-items: ${props => props.location ? props.location : ''};
  align-items: center;
`;

const TimerGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 625px);
`;

export default class PomoderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdownTime: {
        minutes: 25,
        seconds: 0
      },
      currentTimer: {
        minutes: 25,
        seconds: 0
      },
      countdownTimeColor: '#645DE9',
      showTimer: false
    };
    this.changeCountdownTime = this.changeCountdownTime.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.controlTimer = this.controlTimer.bind(this);
  }

  changeCountdownTime({minutes, seconds}, color){
    const {showTimer} = this.state;
    if (showTimer) {
      this.setState({
        showTimer: false
      });
    }
    this.setState(prevState => ({
      countdownTime: {
        minutes,
        seconds
      },
      currentTimer: {
        minutes,
        seconds
      },
      countdownTimeColor: color,
      showTimer: !prevState.showTimer
    }));
  }

  updateTimer(minutes, seconds) {
    const showTimer = minutes > 0 || seconds > 0;
    this.setState({
      countdownTime: {
        minutes,
        seconds,
      },
      showTimer
    });
    if (minutes === 0 && seconds === 0) {
      const alarm = new Howl({src: [sound]});
      alarm.play();
    }
  }

  controlTimer(time, color, name) {
    const {showTimer} = this.state;
    if (name === 'Reset') {
      this.setState(prevState => ({
        countdownTime: {
          minutes: prevState.currentTimer.minutes,
          seconds: prevState.currentTimer.seconds,
        },
        countdownTimeColor: prevState.countdownTimeColor,
        showTimer: false
      }));
    } else if (name === 'Stop') {
      this.setState({
        showTimer: false
      });
    } else if (name === 'Start') {
      if (!showTimer && (time.minutes > 0 || time.seconds > 0)){
        this.setState({
          showTimer: true
        });
      }
    }
  }

  render() {
    const {countdownTime, countdownTimeColor, showTimer} = this.state;
    return(
      <Container>
        <StyledHeading>
          <h1>Pomoder</h1>
        </StyledHeading>
        <TimerAndButtonsContainer>
          <GridLocation gridRow='1' gridCol='1'>
            <Button
              btnColor='#645DE9'
              name='Pomodoro'
              newCountdownTime={{minutes: 25, seconds: 0}}
              handleClick={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='2' gridCol='1'>
            <Button
              btnColor='#B73FF3'
              name='Long Break'
              newCountdownTime={{minutes: 10, seconds: 0}}
              handleClick={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='3' gridCol='1'>
            <Button
              btnColor='#F75789'
              name='Short Break'
              newCountdownTime={{minutes: 5, seconds: 0}}
              handleClick={this.changeCountdownTime}
            />
          </GridLocation>
          <GridLocation gridRow='1' gridCol='3' location='end'>
            <Button
              btnColor='#2BBABD'
              name='Start'
              newCountdownTime={{minutes: countdownTime.minutes, seconds: countdownTime.seconds}}
              handleClick={this.controlTimer}
            />
          </GridLocation>
          <GridLocation gridRow='2' gridCol='3' location='end'>
            <Button
              btnColor='#F5243E'
              name='Stop'
              newCountdownTime={{minutes: countdownTime.minutes, seconds: countdownTime.seconds}}
              handleClick={this.controlTimer}
            />
          </GridLocation>
          <GridLocation gridRow='3' gridCol='3' location='end'>
            <Button
              btnColor='#3AB9EC'
              name='Reset'
              newCountdownTime={{minutes: countdownTime.minutes, seconds: countdownTime.seconds}}
              handleClick={this.controlTimer}
            />
          </GridLocation>
          <GridLocation gridRow='1/-1' gridCol='2' location='center'>
            <TimerGrid>
              {
                !showTimer ?
                  <ShowTime
                    countdownTime={countdownTime}
                    countdownTimeColor={countdownTimeColor}
                  /> :
                  <Timer
                    countdownTime={countdownTime}
                    countdownTimeColor={countdownTimeColor}
                    updateTimer={this.updateTimer}
                  />
              }
            </TimerGrid>
          </GridLocation>
        </TimerAndButtonsContainer>
      </Container>
    );
  }
};
