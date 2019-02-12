import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';

// houses our routes and all of our components
export default class App extends Component {
  /* you don't need a constructor if not initializing state  or binding methods.
  Read more about it here: https://reactjs.org/docs/react-component.html#constructor */
  constructor(props) {
    super(props);
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