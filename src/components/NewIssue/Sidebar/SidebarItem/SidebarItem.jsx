import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import settingIcon from '@/image/icon/settings.svg';
import settingBlue from '@/image/icon/settingsBlue.svg';

import SidebarPopup from '@/components/NewIssue/Sidebar/SidebarPopup/SidebarPopup';

import { mobileModeWidth } from '@/common/constants/responsiveSize';

const SidebarItem = ({ title }) => {
  const [isShownPopup, setIsShownPopup] = useState(false);
  const [defaultItem, setDefaultItem] = useState();

  useEffect(() => {
    switch (title) {
      case 'Assignee':
        setDefaultItem(
          <>
            No one ㅡ <span>assign yourself</span>
          </>
        );
        break;
      case 'Labels':
        setDefaultItem(<>None yet</>);
        break;
      case 'Milestone':
        setDefaultItem(<>No Milestone</>);
        break;
      default:
        break;
    }
  }, []);

  const sidebarTitleClickHandler = () => {
    setIsShownPopup(!isShownPopup);
  };

  const popupCloseClickHandler = () => {
    setIsShownPopup(false);
  };

  return (
    <>
      {isShownPopup ? <PopupCloseWrap onClick={popupCloseClickHandler} /> : ''}
      <SidebarSelectWrap>
        {isShownPopup ? <SidebarPopup /> : ''}
        <TitleIconWrap onClick={sidebarTitleClickHandler}>
          {title}
          <img src={settingIcon} />
          <HoverIcon src={settingBlue} />
        </TitleIconWrap>
        <SelectedList>
          <SelectedItem>{defaultItem}</SelectedItem>
        </SelectedList>
      </SidebarSelectWrap>
    </>
  );
};

export default SidebarItem;

const HoverIcon = styled.img`
  display: none;
  width: 16px;
`;

const SidebarSelectWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  @media only screen and (max-width: ${mobileModeWidth}) {
    padding: 20px;
  }
`;

const TitleIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  color: #585858;
  cursor: pointer;
  img {
    width: 16px;
  }
  &:hover {
    color: ${({ theme }) => theme.color.themeBlue};
    img {
      display: none;
    }
  }
  &:hover ${HoverIcon} {
    display: block;
  }
`;

const SelectedList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid grey;
`;

const SelectedItem = styled.div`
  display: flex;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: #585858;
  margin: 15px 0;
  span {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: #585858;
    cursor: pointer;
  }
  &:hover {
    span {
      color: ${({ theme }) => theme.color.themeBlue};
    }
  }
`;
const PopupCloseWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
