import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PomoderContainer from './components/PomoderContainer';
import NotFound from './components/NotFound';

// houses our routes and all of our components
const Pomoder = () => (
  <Switch>
    <Route exact path ="/" component={PomoderContainer} />
    <Route component={NotFound} />
  </Switch>
);

export default Pomoder;
