import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { mobileModeWidth, tabletModeWidth } from '@/common/constants/responsiveSize';

import BlueButton from '@/components/UI/Button/BlueButton';

const NewIssueButton = () => {
  const history = useHistory();

  const newIssueButtonClickHandler = () => {
    history.push('/newIssue');
  };

  return (
    <>
      <ButtonWrap>
        <BlueButton title="New issue" minWidth="105px" onClick={newIssueButtonClickHandler} />
      </ButtonWrap>
      <MobileButton onClick={newIssueButtonClickHandler}>+</MobileButton>
    </>
  );
};

export default NewIssueButton;

const ButtonWrap = styled.div`
  min-width: 104px;
  margin: 0 0 0 10px;
  @media only screen and (max-width: ${mobileModeWidth}) and (max-width: ${tabletModeWidth}) {
    display: none;
  }
`;

const MobileButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: ${({ theme }) => theme.Main.newIssueButton.mobileBackground};
  font-size: ${({ theme }) => theme.fontSize.title};
  color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  @media only screen and (max-width: ${mobileModeWidth}) and (max-width: ${tabletModeWidth}) {
    display: flex;
  }
`;
