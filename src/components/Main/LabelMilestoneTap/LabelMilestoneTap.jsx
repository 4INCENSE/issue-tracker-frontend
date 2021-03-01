import React from 'react';
import styled, { css } from 'styled-components';

import tag from '@/image/icon/tag.svg';
import milestone from '@/image/icon/milestone.svg';

const LabelMilestoneTap = () => {
  return (
    <Wrap>
      <Tap label>
        <img src={tag} />
        Labels
      </Tap>
      <Tap milestone>
        <img src={milestone} />
        Milestones
      </Tap>
    </Wrap>
  );
};

export default LabelMilestoneTap;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border: solid 1px ${({ theme }) => theme.LabelMilestoneTap.border};
  font-size: ${({ theme }) => theme.fontSize.regular};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.LabelMilestoneTap.hover};
  }
  img {
    width: 18px;
    margin: 0 6px 0 0;
  }
  ${(props) => {
    if (props.label) {
      return css`
        border-right: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      `;
    }
    if (props.milestone) {
      return css`
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      `;
    }
  }};
`;
