import React from 'react';
import styled, { css } from 'styled-components';

import { mobileModeWidth, tabletModeWidth } from '@/common/constants/responsiveSize';

import tag from '@/image/icon/tag.svg';
import milestone from '@/image/icon/milestone.svg';

const LabelMilestoneTap = () => {
  return (
    <Wrap>
      <Tap labels>
        <img src={tag} />
        Labels
        <TapNumber>12</TapNumber>
      </Tap>
      <Tap milestones>
        <img src={milestone} />
        Milestones
        <TapNumber>1</TapNumber>
      </Tap>
    </Wrap>
  );
};

export default LabelMilestoneTap;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  @media only screen and (max-width: ${mobileModeWidth}) and (max-width: ${tabletModeWidth}) {
    width: 100%;
  }
`;

const Tap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: solid 1px ${({ theme }) => theme.Main.labelMilestoneTap.border};
  font-size: ${({ theme }) => theme.fontSize.regular};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.Main.labelMilestoneTap.hover};
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1) inset;
  }
  img {
    width: 18px;
    margin: 0 6px 0 0;
  }
  ${(props) => {
    if (props.labels) {
      return css`
        width: 45%;
        border-right: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      `;
    }
    if (props.milestones) {
      return css`
        width: 55%;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      `;
    }
  }};
  @media only screen and (max-width: ${mobileModeWidth}) {
    font-size: ${({ theme }) => theme.fontSize.base};
    img {
      display: none;
    }
  }
`;

const TapNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  border-radius: 15px;
  background: ${({ theme }) => theme.Main.labelMilestoneTap.tapNumber};
  padding: 5px;
  margin: 0 0 0 6px;
`;
