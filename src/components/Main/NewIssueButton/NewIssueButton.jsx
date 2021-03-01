import React from 'react';
import styled from 'styled-components';

import { mobileModeWidth, tabletModeWidth } from '@/common/constants/responsiveSize';

const NewIssueButton = () => {
  return (
    <>
      <Button>New issue</Button>
      <MobileButton>+</MobileButton>
    </>
  );
};

export default NewIssueButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.regular};
  padding: 10px 15px;
  margin: 0 0 0 10px;
  background: ${({ theme }) => theme.Main.newIssueButton.background};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.Main.newIssueButton.hover};
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2) inset;
  }
  @media only screen and (max-width: ${mobileModeWidth}) and (max-width: ${tabletModeWidth}) {
    display: none;
  }
`;

const MobileButton = styled.button`
  position: absolute;
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
