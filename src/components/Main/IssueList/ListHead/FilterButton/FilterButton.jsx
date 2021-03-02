import React from 'react';
import styled from 'styled-components';

import arrow from '@/image/icon/arrow-point-to-down.svg';

const FilterButton = ({ title }) => {
  return (
    <Wrap>
      {title}
      <img src={arrow} />
    </Wrap>
  );
};

export default FilterButton;

const Wrap = styled.div`
  display: flex;
  cursor: pointer;
  margin: auto 15px;
  img {
    margin: 0 0 0 5px;
    width: 12px;
  }
`;
