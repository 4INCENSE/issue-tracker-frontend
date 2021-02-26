import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { mobileModeWidth } from '@/common/constants/responsiveWidth';

import background from '@/image/background/main.jpg';
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
          <LoginTitle> SNS 계정으로 시작하기 </LoginTitle>
          <LoginButtonWrap>
            <LoginButton kakao>
              <img src={kakao} style={{ width: '22px' }} />
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

const appear = keyframes`
  from {opacity : 0}
  99% {opacity : 0}
  to { opacity : 1}
`;

const spread = keyframes`
  0% {width : 15px}
  80%{width : 15px}
  to {width : 500px}
`;

const moveUp = keyframes`
  from {
      margin-bottom : -2000px;
  }
  to {
      margin-bottom : 0;
  }
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
  animation: ${moveUp} 0.8s, ${spread} 0.9s;
  animation-fill-mode: backwards;
  border-radius: 10px;
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 300px;
    height: 70%;
  }
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
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 90px;
  }
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appear} 0.1s;
  animation-fill-mode: backwards;
  animation-delay: 1s;
  padding: 50px 0 0 0;
  @media only screen and (max-width: ${mobileModeWidth}) {
    padding: 60px 0 0 0;
  }
`;

const LoginTitle = styled.div`
  font-family: 'GmarketSansLight';
  font-weight: bold;
  font-size: 20px;
  margin: 0 0 30px 0;
  @media only screen and (max-width: ${mobileModeWidth}) {
    font-size: 15px;
  }
`;

const LoginButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  border-bottom: 2px solid black;
  padding: 30px;
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 250px;
    border-bottom: 1px solid black;
  }
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
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    img {
      width: 25px;
    }
  }
`;
