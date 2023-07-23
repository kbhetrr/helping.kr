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
          <Card>
            <CardImg alt="post" src="img/post.png" />
            우편번호 찾기
          </Card>
          <Card>세금 계산기</Card>
          <Card>영문 주소 변환기</Card>
          <Card>제사 축문 작성하기</Card>
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

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const CardView = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: calc(50% - 2rem);
  color: #fff;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #123;
  border-radius: 8px;
  padding: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardImg = styled.img`
  height: 160px;
  margin-bottom: 16px;
`;

export default App;
