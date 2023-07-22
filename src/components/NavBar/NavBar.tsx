import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const NavBar = () => {
  return <Nav>네비게이션 바 입니다.</Nav>;
};

const Nav = styled.div`
  background-color: #222;
  align-items: center;
  display: flex;
  color: #fff;
  width: 95%;
  height: 70px;
  border-radius: 12px;
  z-index: 1000;
  padding: 0 30px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
`;

export default NavBar;
