import React, {Component} from "react";
import styled from "styled-components";

const StyledTimer = styled.svg`
  & .fade-stop-1 {
    stop-color: #44479b;
    stop-opacity: 100;
  }

  & .fade-stop-2 {
    stop-color: #1c1d3d;
    stop-opacity: 1;
  }

  & .circle {
    stroke: ${props => props.countdownTimeColor};
    fill: none;
    stroke-width: 0.5;
    stroke-linecap: round;
  }

  & .text {
    stroke: ${props => props.countdownTimeColor};
    stroke-width: 0.32;
    fill: #fff;
    font-size: 10px;
    font-family: Karla;
  }
`;

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.timer = this.timer.bind(this);
    this.calculateDuration = this.calculateDuration.bind(this);
  }

  componentWillMount() {
    this.startTimerId = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.startTimerId);
  }

  timer() {
    const duration = this.calculateDuration();
    const minutesLeft = Math.floor(duration / 60);
    const secondsLeft = duration % 60;
    const {updateTimer} = this.props;
    updateTimer(minutesLeft, secondsLeft);
  }

  calculateDuration() {
    const {countdownTime: {minutes, seconds}} = this.props;
    return ((parseInt(minutes * 60, 10)) + parseInt(seconds, 10)) - 1;
  }

  render() {
    const {countdownTimeColor} = this.props;
    const {countdownTime: {minutes, seconds}} = this.props;
    return (
      <StyledTimer viewBox="0 0 50 50" countdownTimeColor={countdownTimeColor}>
        <defs>
          <radialGradient id="fade" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" className="fade-stop-1" />
            <stop offset="100%" className="fade-stop-2"/>
          </radialGradient>
        </defs>
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="url(#fade)"
          strokeWidth="4"
        />
        <path className="circle"
          d="M25 5
              a 20 20 0 0 1 0 40
              a 20 20 0 0 1 0 -40"
        />
        <text className="text"
          x="25"
          y="25"
          dy=".3em"
          textAnchor="middle"
        >
          {
            `${minutes < 10 ? 0 : ''}${minutes}
              :
              ${seconds < 10 ? 0 : ''}${seconds}`
          }
        </text>
      </StyledTimer>
    );
  }
};
