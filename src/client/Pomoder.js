import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';

// houses our routes and all of our components
export default class Pomoder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoroTimer: 25,
      longBreak: 10,
      shortBreak: 5
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}