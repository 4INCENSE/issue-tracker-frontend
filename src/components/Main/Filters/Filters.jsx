import React from 'react';
import styled from 'styled-components';

import arrow from '@/image/icon/arrow-point-to-down.svg';

const Filters = () => {
  return (
    <FilterButtonWrap>
      <FilterButton>
        필터 <img src={arrow} />
      </FilterButton>
      <FilterList placeholder="모든 이슈를 검색해보세요" />
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

const FilterButton = styled.button`
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

  &:focus {
    outline: 0;
    box-shadow: 0 0 3px 2px ${({ theme }) => theme.filter.inputHover};
  }
`;
