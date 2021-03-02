import React, { useState } from 'react';
import styled from 'styled-components';

import check from '@/image/icon/check.svg';

const Checkbox = ({ checked }) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <>
      {isChecked ? (
        <CheckImg src={check} onClick={() => setIsChecked(false)} />
      ) : (
        <Wrap onClick={() => setIsChecked(true)}></Wrap>
      )}
    </>
  );
};

export default Checkbox;

const Wrap = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  background: white;
  border: 1px solid gray;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`;

const CheckImg = styled.img`
  width: 16px;
  cursor: pointer;
`;
