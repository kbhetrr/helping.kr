import React from 'react';
import { styled } from 'styled-components';
import './App.css';
import NavBar from 'components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Title style={{ fontFamily: 'Pretendard' }}>
          원하는 메뉴를 클릭해주세요.
        </Title>
        <CardView>
          <Card>test1</Card>
          <Card>test2</Card>
          <Card>test3</Card>
        </CardView>
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

const CardView = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: calc(50% - 2rem);
  height: 80px;
  color: #fff;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #123;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default App;
