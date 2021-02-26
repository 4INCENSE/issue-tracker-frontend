import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import background from '@/image/background/main.jpg';
import whiteLogo from '@/image/logo/logo_w.png';
import blackLogo from '@/image/logo/logo_b.png';

import google from '@/image/logo/snsLogo/google.png';
import kakao from '@/image/logo/snsLogo/kakao.png';
import naver from '@/image/logo/snsLogo/naver.png';

const Login = () => {
  return (
    <Wrap>
      <ContentWrap>
        <LogoWrap>
          <Logo src={blackLogo} />
        </LogoWrap>
        <LoginWrap>
          <LoginTitle>Welcome to Issue tracker !</LoginTitle>
          <LoginTitle>- SNS 계정으로 시작하기 -</LoginTitle>
          <LoginButtonWrap>
            <LoginButton kakao>
              <img src={kakao} style={{ width: '25px' }} />
            </LoginButton>
            <LoginButton naver>
              <img src={naver} />
            </LoginButton>
            <LoginButton google>
              <img src={google} />
            </LoginButton>
          </LoginButtonWrap>
        </LoginWrap>
      </ContentWrap>
    </Wrap>
  );
};

export default Login;

const Wrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 115px 50px 50px 50px;
  width: 100%;
  height: 100%;
  background-image: url('main.jpg');
  background-size: cover;
`;

const ContentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 60%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
`;

const LogoWrap = styled.div`
  position: absolute;
  top: -65px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: 130px;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.div`
  font-family: 'GmarketSansLight';
  font-weight: bold;
  font-size: 20px;
  margin: 0 0 30px 0;
`;

const LoginButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  border-bottom: 10px solid black;
  padding: 30px;
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  cursor: pointer;
  ${(props) => {
    if (props.kakao) {
      return css`
        background: #fcce00;
      `;
    }
    if (props.naver) {
      return css`
        background: #19ce60;
      `;
    }
    if (props.google) {
      return css`
        background: white;
        border: 1px solid #c4c5c7;
      `;
    }
  }};
  img {
    width: 35px;
  }
`;
