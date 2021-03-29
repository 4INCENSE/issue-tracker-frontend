import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import arrow from '@/image/icon/arrow-point-to-down.svg';
import checked from '@/image/icon/checked.svg';
import profile from '@/image/profile.jpg';

const FilterButton = ({ title }) => {
  const [isShownPopup, setIsShownPopup] = useState(false);

  const filterButtonClickHandler = () => {
    setIsShownPopup(!isShownPopup);
  };

  return (
    <Wrap onClick={filterButtonClickHandler}>
      {title}
      <img src={arrow} />
      {isShownPopup ? (
        <ListPopupWrap>
          <ListPopupMenu first>Filter by label</ListPopupMenu>
          <ListPopupMenu>
            <UserListContent>
              <CheckedIcon>
                <img src={checked} />
              </CheckedIcon>
              <img src={profile} /> hyewon3938 <span>Joy</span>
            </UserListContent>
          </ListPopupMenu>
          <ListPopupMenu>
            <LabelContent>
              <CheckedIcon>
                <img src={checked} />
              </CheckedIcon>
              <LabelColor />
              <LabelDescriptionWrap>
                feature
                <span>New feature or request</span>
              </LabelDescriptionWrap>
            </LabelContent>
          </ListPopupMenu>
          <ListPopupMenu>
            <CheckedIcon>
              <img src={checked} />
            </CheckedIcon>
            <MilestoneContent>스프린트2</MilestoneContent>
          </ListPopupMenu>
        </ListPopupWrap>
      ) : (
        ''
      )}
    </Wrap>
  );
};

export default FilterButton;

const ListPopupWrap = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  display: flex;
  flex-direction: column;
  min-width: 210px;
  border: 1px solid ${({ theme }) => theme.Main.filterButton.border};
  border-radius: 5px;
  background: white;
`;
const Wrap = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  margin: auto 15px;
  img {
    margin: 0 0 0 5px;
    width: 12px;
  }
`;

const ListPopupMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 30px;
  border-top: 1px solid ${({ theme }) => theme.Main.filterButton.border};
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.Main.filter.buttonBackground};
  }
  ${(props) => {
    if (props.first) {
      return css`
        border-top: none;
        background: ${({ theme }) => theme.Main.filter.buttonBackground};
        font-weight: bold;
        &:hover {
          background: ${({ theme }) => theme.Main.filter.buttonBackground};
        }
      `;
    }
  }};
`;

const UserListContent = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  span {
    color: gray;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSize.small};
    margin: 8px 5px 8px 5px;
  }
  img {
    width: 23px;
    height: 23px;
    border-radius: 23px;
    margin: 0 5px 0 0;
  }
`;

const LabelContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 7px 5px;
`;

const LabelColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background: blue;
  margin: 0 5px 0 0;
`;

const LabelDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.small};
  span {
    color: gray;
    font-size: ${({ theme }) => theme.fontSize.small};
    margin: 5px 0 0 0;
  }
`;

const MilestoneContent = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 5px;
`;

const CheckedIcon = styled.div`
  display: flex;
  img {
    width: 13px;
    margin: 0 7px 0 0;
    opacity: 0;
  }
`;
