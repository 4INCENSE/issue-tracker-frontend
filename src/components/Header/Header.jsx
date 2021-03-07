import React, { useState } from 'react';
import styled from 'styled-components';

import { mobileModeWidth, tabletModeWidth } from '@/common/constants/responsiveSize';

import logo from '@/image/logo/serviceLogo/logo_w.png';
import profile from '@/image/profile.jpg';

const Header = () => {
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const profileClickHandler = () => {
    setShowLogoutButton(!showLogoutButton);
  };

  const logoutButtonCancelClickHandler = () => {
    setShowLogoutButton(false);
  };

  const logoutButtonClickHandler = () => {
    console.log('로그아웃되었습니다');
    window.history.back();
  };

  return (
    <Wrap>
      <HeaderContent>
        <Logo src={logo} />
        <Line></Line>
        <UserWrap onClick={profileClickHandler}>
          <Profile src={profile} />
          {showLogoutButton ? (
            <LogoutButtonCancelWrap onClick={logoutButtonCancelClickHandler}>
              <LogoutButton onClick={logoutButtonClickHandler}>로그아웃</LogoutButton>
            </LogoutButtonCancelWrap>
          ) : (
            ''
          )}
        </UserWrap>
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
  padding: 0 30px;

  @media only screen and (max-width: ${mobileModeWidth}) and (max-width: ${tabletModeWidth}) {
    padding: 0 10px;
  }
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

const LogoutButton = styled.button`
  position: absolute;
  top: 70px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background: white;
  border: solid 1px black;
  font-size: ${({ theme }) => theme.fontSize.small};
  z-index: 5;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.header.menuHover};
    color: white;
  }
`;

const UserWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 45px;
  border-radius: 10px;
`;

const LogoutButtonCancelWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
