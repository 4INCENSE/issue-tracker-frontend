import React from 'react';
import styled, { css } from 'styled-components';

const BlueButton = ({ title, onClick, type }) => {
  switch (type) {
    case 'small':
      return (
        <Button small onClick={onClick}>
          {title}
        </Button>
      );
    case 'block':
      return (
        <Button block onClick={onClick}>
          {title}
        </Button>
      );
    case 'smallBlock':
      return (
        <Button small block onClick={onClick}>
          {title}
        </Button>
      );
    default:
      return <Button onClick={onClick}>{title}</Button>;
  }
};

export default BlueButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.regular};
  padding: 10px 15px;
  background: ${({ theme }) => theme.Main.newIssueButton.background};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.Main.newIssueButton.hover};
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2) inset;
  }
  ${(props) => {
    if (props.small) {
      return css`
        font-size: ${({ theme }) => theme.fontSize.small};
        font-weight: bold;
      `;
    }
  }};

  ${(props) => {
    if (props.block) {
      return css`
        opacity: 0.5;
        cursor: not-allowed;
        &:hover {
          background: ${({ theme }) => theme.Main.newIssueButton.background};
        }
      `;
    }
  }};
`;
