import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDom.render(
  <Router>
    <h1>Yay!!! React up and running</h1>
  </Router>, 
  document.getElementById('app')
);