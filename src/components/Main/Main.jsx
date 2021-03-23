import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { mobileModeWidth, responsiveHeight, tabletModeWidth } from '@/common/constants/responsiveSize';

import Wrap from '@/components/UI/Layout/Wrap';
import FIlters from '@/components/Main/Filters/Filters';
import LabelMilestoneTap from '@/components/Main/LabelMilestoneTap/LabelMilestoneTap';
import NewIssueButton from '@/components/Main/NewIssueButton/NewIssueButton';
import ResetQueryButton from '@/components/Main/ResetQueryButton/ResetQueryButton';
import IssueList from '@/components/Main/IssueList/IssueList';

const Main = () => {
  return (
    <>
      <Wrap>
        <MainContentWrap>
          <HeadWrap>
            <FiltersWrap>
              <FIlters />
            </FiltersWrap>
            <TapButtonWrap>
              <LabelMilestoneTap />
              <NewIssueButton />
            </TapButtonWrap>
          </HeadWrap>
          <ResetQueryButton />
          <IssueList />
        </MainContentWrap>
      </Wrap>
    </>
  );
};

export default Main;

const MainContentWrap = styled.div`
  width: 70%;
  @media only screen and (max-width: ${tabletModeWidth}) {
    width: 100%;
  }
`;

const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: ${tabletModeWidth}) {
    flex-direction: column;
  }
`;

const FiltersWrap = styled.div`
  width: 100%;
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
