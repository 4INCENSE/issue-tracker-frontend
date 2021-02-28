import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import logo from '@/image/logo/serviceLogo/logo_w.png';
import profile from '@/image/profile.jpg';

const Header = () => {
  return (
    <Wrap>
      <HeaderContent>
        <Logo src={logo} />
        <Line></Line>
        <User>
          <Profile src={profile} />
          <UserMenuWrap>
            <Triangle></Triangle>
            <UserMenu>설정</UserMenu>
            <UserMenu>로그아웃</UserMenu>
          </UserMenuWrap>
        </User>
      </HeaderContent>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.header.background};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 50px;
`;

const Logo = styled.img`
  width: 58px;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: solid 1px white;
  border-radius: 1px;
  margin: auto 20px;
`;

const Triangle = styled.div`
  position: absolute;
  top: -8px;
  right: 10px;
  width: 0px;
  height: 0px;
  border-bottom: 7px solid white;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
`;

const UserMenuWrap = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  background: white;
  border: solid 2px #e2dfdf;
`;

const User = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover ${UserMenuWrap} {
    display: flex;
  }
`;

const Profile = styled.img`
  width: 45px;
  border-radius: 10px;
`;

const UserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: black;
  &:hover {
    background: ${({ theme }) => theme.header.menuHover};
    color: white;
  }
`;
