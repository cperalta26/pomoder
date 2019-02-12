import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import MainApp from './MainApp';
import '../../public/index.css';

ReactDom.render(
  <Router>
    <MainApp />
  </Router>, 
  document.getElementById('app')
);
