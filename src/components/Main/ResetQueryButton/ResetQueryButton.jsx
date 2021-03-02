import React from 'react';
import styled from 'styled-components';

import { mobileModeWidth, tabletModeWidth } from '@/common/constants/responsiveSize';

import deleteIcon from '@/image/icon/delete.svg';
import deleteIcon_b from '@/image/icon/delete_b.svg';

const ResetQueryButton = () => {
  return (
    <Wrap>
      <img src={deleteIcon} /> Clear current search query, filters and sorts
      <HoverIcon src={deleteIcon_b} />
    </Wrap>
  );
};

export default ResetQueryButton;

const HoverIcon = styled.img`
  position: absolute;
  display: none;
  width: 18px;
`;

const Wrap = styled.button`
  position: relative;
  display: flex;
  margin: 0 0 15px 0;
  cursor: pointer;
  img {
    width: 18px;
    margin: 0 5px 0 0;
  }
  &:hover {
    color: ${({ theme }) => theme.Main.resetQueryButton.hover};
  }
  &:hover ${HoverIcon} {
    display: block;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    font-size: ${({ theme }) => theme.fontSize.small};
    img {
      width: 15px;
      margin: 0 3px 0 0;
    }
  }
`;
