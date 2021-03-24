import React from 'react';
import styled from 'styled-components';

import settingIcon from '@/image/icon/settings.svg';
import settingBlue from '@/image/icon/settingsBlue.svg';

const Sidebar = () => {
  return (
    <Wrap>
      <SidebarSelectWrap>
        <TitleIconWrap>
          Assignees
          <img src={settingIcon} />
          <HoverIcon src={settingBlue} />
        </TitleIconWrap>
        <SelectedList>
          <SelectedItem>
            No one ㅡ <span>assign yourself</span>
          </SelectedItem>
        </SelectedList>
      </SidebarSelectWrap>
      <SidebarSelectWrap>
        <TitleIconWrap>
          Labels
          <img src={settingIcon} />
          <HoverIcon src={settingBlue} />
        </TitleIconWrap>
        <SelectedList>
          <SelectedItem>None yet</SelectedItem>
        </SelectedList>
      </SidebarSelectWrap>
      <SidebarSelectWrap>
        <TitleIconWrap>
          Milestone
          <img src={settingIcon} />
          <HoverIcon src={settingBlue} />
        </TitleIconWrap>
        <SelectedList>
          <SelectedItem>No milestone</SelectedItem>
        </SelectedList>
      </SidebarSelectWrap>
    </Wrap>
  );
};

export default Sidebar;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HoverIcon = styled.img`
  display: none;
  width: 16px;
`;

const SidebarSelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
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
