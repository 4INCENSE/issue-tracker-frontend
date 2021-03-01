import React from 'react';
import styled, { css } from 'styled-components';

import arrow from '@/image/icon/arrow-point-to-down.svg';

const Filters = () => {
  return (
    <FilterButtonWrap>
      <FilterButton>
        Filters <img src={arrow} />
        <FilterMenuWrap>
          <FilterMenu first>Filter Issues</FilterMenu>
          <FilterMenu>Open issues</FilterMenu>
          <FilterMenu>Your issues</FilterMenu>
          <FilterMenu>Everything assigned to you</FilterMenu>
          <FilterMenu>Everything mentioning you</FilterMenu>
          <FilterMenu>Closed issues</FilterMenu>
        </FilterMenuWrap>
      </FilterButton>
      <FilterList placeholder="Search all issues" />
    </FilterButtonWrap>
  );
};

export default Filters;

const FilterButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const FilterMenuWrap = styled.div`
  position: absolute;
  display: none;
  top: 50px;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background: white;
  border: solid 1px ${({ theme }) => theme.filter.border};
  border-radius: 3px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
`;

const FilterMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: solid 1px ${({ theme }) => theme.filter.border};
  padding: 10px;
  &:hover {
    background: ${({ theme }) => theme.filter.buttonHover};
  }
  ${(props) => {
    if (props.first) {
      return css`
        border-top: none;
        background: ${({ theme }) => theme.filter.buttonBackground};
        font-weight: bold;
        &:hover {
          background: ${({ theme }) => theme.filter.buttonBackground};
        }
      `;
    }
  }};
`;

const FilterButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  background: ${({ theme }) => theme.filter.buttonBackground};
  border: solid 1px ${({ theme }) => theme.filter.border};
  border-right: none;
  border-radius: 5px 0 0 5px;
  padding: 10px;
  cursor: pointer;
  img {
    width: 13px;
    margin: 0 0 0 4px;
  }
  &:hover {
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2) inset;
    background: ${({ theme }) => theme.filter.buttonHover};
  }
  &:hover ${FilterMenuWrap} {
    display: flex;
  }
`;

const FilterList = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 40px;
  background-image: url('src/image/icon/loupe.svg');
  background-position: 8px center;
  background-size: 15px;
  background-repeat: no-repeat;
  border: solid 1px ${({ theme }) => theme.filter.border};
  border-radius: 0 5px 5px 0;
  padding: 10px 10px 10px 30px;
  z-index: 1;
  &:focus {
    outline: 0;
    box-shadow: 0 0 3px 2px ${({ theme }) => theme.filter.inputHover};
  }
`;
