import React, { useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import { addCheckedList, deleteCheckedList } from '@/redux/Main/actions/checkboxAction';

import check from '@/image/icon/check.svg';

const Checkbox = ({ checked, id }) => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(checked);

  const checkboxClickHandler = () => {
    setIsChecked(!isChecked);
    isChecked ? dispatch(deleteCheckedList(id)) : dispatch(addCheckedList(id));
  };

  return (
    <>
      {isChecked ? (
        <CheckImg src={check} onClick={checkboxClickHandler} />
      ) : (
        <Wrap onClick={checkboxClickHandler}></Wrap>
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
