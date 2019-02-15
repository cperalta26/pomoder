import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Pomoder from './Pomoder';
import '../../public/index.css';

ReactDom.render(
  <Router>
    <Pomoder/>
  </Router>, 
  document.getElementById('app')
);
