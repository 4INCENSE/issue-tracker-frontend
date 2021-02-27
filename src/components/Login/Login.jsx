import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { mobileModeWidth, responsiveHeight } from '@/common/constants/responsiveSize';

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
          <LoginTitle>Welcome to IssueTracker!</LoginTitle>
          <LoginTitle> SNS 계정으로 시작하기 </LoginTitle>
          <LoginButtonWrap>
            <LoginButton kakao>
              <img src={kakao} style={{ width: '22px' }} />
            </LoginButton>
            <LoginButton style={{ margin: '0 5px' }} naver>
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
  width: 100%;
  height: 100%;
  min-height: 40%;
  background-image: url('main.jpg');
  background-size: cover;
  padding: 115px 50px 50px 50px;
  @media only screen and (max-width: ${mobileModeWidth}) {
    padding: 10px;
  }
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
  height: 500px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 10px;
  animation: ${moveUp} 0.8s, ${spread} 0.9s;
  animation-fill-mode: backwards;
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 100%;
    max-width: 300px;
    max-height: 350px;
  }
  @media only screen and (max-height: ${responsiveHeight}) {
    max-width: 500px;
    max-height: 350px;
  }
  @media only screen and (max-width: ${mobileModeWidth}) and (max-height: ${responsiveHeight}) {
    width: 100%;
    max-width: 300px;
    max-height: 350px;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 75px 0 0 0;
  animation: ${appear} 0.1s;
  animation-fill-mode: backwards;
  animation-delay: 1s;
  @media only screen and (max-width: ${mobileModeWidth}) {
    padding: 10px 0 0 0;
  }
  @media only screen and (max-height: ${responsiveHeight}) {
    padding: 35px 0 0 0;
  }
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'GmarketSansLight';
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin: 0 0 30px 0;
  @media only screen and (max-width: ${mobileModeWidth}) {
    font-size: 14px;
    max-width: 80%;
  }
  @media only screen and (max-height: ${responsiveHeight}) {
    font-size: 17px;
    margin: 0 0 15px 0;
  }
`;

const LoginButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  border-bottom: 2px solid black;
  padding: 0 0 30px 0;
  margin: 20px 0 0 0;
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 80%;
    max-width: 250px;
    border-bottom: 1px solid black;
  }
  @media only screen and (max-height: ${responsiveHeight}) {
    border-bottom: 1px solid black;
    padding: 0 0 10px 0;
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
  @media only screen and (max-height: ${responsiveHeight}) {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    img {
      width: 25px;
    }
  }
`;
