import React from 'react';
import styled from 'styled-components';

import { mobileModeWidth, responsiveHeight, tabletModeWidth } from '@/common/constants/responsiveSize';

const Wrap = ({ children }) => {
  return <WrapStyle>{children}</WrapStyle>;
};

export default Wrap;

const WrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5vh;

  @media only screen and (max-width: ${tabletModeWidth}) {
    padding: 10px;
  }
`;
