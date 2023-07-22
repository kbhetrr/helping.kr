import React from 'react';
import { styled } from 'styled-components';
import './App.css';
import NavBar from 'components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Title style={{ fontFamily: 'Pretendard' }}>안ㄴ옇사에요</Title>
        test 입니다.
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 768px;
  margin: 0px auto;
  margin-top: 110px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-family: serif;
  font-size: 28px;
`;

export default App;
