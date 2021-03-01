import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { mobileModeWidth, responsiveHeight, tabletModeWidth } from '@/common/constants/responsiveSize';

import Wrap from '@/components/UI/Layout/Wrap';
import Header from '@/components/Header/Header';
import FIlters from '@/components/Main/Filters/Filters';
import LabelMilestoneTap from '@/components/Main/LabelMilestoneTap/LabelMilestoneTap';
import NewIssueButton from '@/components/Main/NewIssueButton/NewIssueButton';

const Main = () => {
  return (
    <>
      <Header />
      <Wrap>
        <HeadWrap>
          <FiltersWrap>
            <FIlters />
          </FiltersWrap>
          <TapButtonWrap>
            <LabelMilestoneTap />
            <NewIssueButton />
          </TapButtonWrap>
        </HeadWrap>
      </Wrap>
    </>
  );
};

export default Main;

const HeadWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: ${tabletModeWidth}) {
    flex-direction: column;
  }
`;

const FiltersWrap = styled.div`
  width: 50%;
  @media only screen and (max-width: ${tabletModeWidth}) {
    width: 100%;
  }
`;

const TapButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0 0px 20px;
  @media only screen and (max-width: ${tabletModeWidth}) {
    justify-content: flex-end;
    width: 100%;
    margin: 0;
  }
`;
