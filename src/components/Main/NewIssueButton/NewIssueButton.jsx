import React from 'react';
import styled, { css } from 'styled-components';

const NewIssueButton = () => {
  return <Button>New issue</Button>;
};

export default NewIssueButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 110px;
  border-radius: 5px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.regular};
  padding: 10px 15px;
  margin: 0 0 0 30px;
  background: ${({ theme }) => theme.Main.newIssueButton.background};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.Main.newIssueButton.hover};
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2) inset;
  }
`;
