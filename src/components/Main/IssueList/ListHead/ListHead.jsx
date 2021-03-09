import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { setIsAllChecked } from '@/redux/Main/actions/checkboxAction';

import { mobileModeWidth } from '@/common/constants/responsiveSize';

import Checkbox from '@/components/UI/Checkbox/Checkbox';
import FilterButton from '@/components/Main/IssueList/ListHead/FilterButton/FilterButton';

const ListHead = () => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxClickHandler = () => {
    setIsChecked(!isChecked);
    dispatch(setIsAllChecked(!isChecked));
  };

  return (
    <Wrap>
      <SelectInfoWrap onClick={onCheckboxClickHandler}>
        <Checkbox />
        {isChecked ? <span>1 selected</span> : ''}
      </SelectInfoWrap>
      {isChecked ? (
        <FilterButtonWrap>
          <FilterButton title="Mark as" />
        </FilterButtonWrap>
      ) : (
        <FilterButtonWrap>
          <FilterButton title="Author" />
          <FilterButton title="Label" />
          <FilterButton title="Milestones" />
          <FilterButton title="Assignee" />
        </FilterButtonWrap>
      )}
    </Wrap>
  );
};

export default ListHead;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: solid 1px ${({ theme }) => theme.Main.list.border};
  background: ${({ theme }) => theme.Main.list.background};
  padding: 15px;
  @media only screen and (max-width: ${mobileModeWidth}) {
    display: none;
  }
`;

const FilterButtonWrap = styled.div`
  display: flex;
  @media only screen and (max-width: ${mobileModeWidth}) {
    display: none;
  }
`;

const SelectInfoWrap = styled.span`
  display: flex;
  span {
    margin: 0 0 0 10px;
  }
`;
