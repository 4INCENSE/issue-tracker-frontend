import React from 'react';

import styled from 'styled-components';

import { mobileModeWidth } from '@/common/constants/responsiveSize';

const Label = ({ id, title, textColor, backgroundColor }) => {
  return <Wrap style={{ color: textColor, background: backgroundColor }}>{title}</Wrap>;
};

export default Label;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #67aac9;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  padding: 4px 10px 4px 10px;
  margin: -3px 0 0 10px;
  cursor: pointer;
  @media only screen and (max-width: ${mobileModeWidth}) {
    margin: 5px 0 0 5px;
    padding: 3px 5px;
  }
`;
