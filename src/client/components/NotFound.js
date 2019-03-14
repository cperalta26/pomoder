import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  line-height: 45px;

  width: 100vw;
  height: 100vh;

  display: grid;
  justify-content: center;
  align-content: center;
`;

const NotFound = () => (
  <StyledNotFound>
    <h1>This page was not found</h1>
    <Link to="/">Go back to home page</Link>
  </StyledNotFound>
);

export default NotFound;
