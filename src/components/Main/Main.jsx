import React from 'react';
import styled, { css, keyframes } from 'styled-components';

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
          <FIlters />
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
`;

const TapButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* width: 400px; */
  margin: 0 0 0 20px;
`;
