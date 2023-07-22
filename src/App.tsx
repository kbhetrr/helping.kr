import React from 'react';
import { styled } from 'styled-components';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return <Container>test 입니다.</Container>;
};

const Container = styled.div`
  width: 768px;
  margin: 0px auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default App;
