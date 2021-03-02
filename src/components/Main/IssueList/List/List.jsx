import React from 'react';
import styled, { css } from 'styled-components';

import { mobileModeWidth, tabletModeWidth } from '@/common/constants/responsiveSize';

import Checkbox from '@/components/UI/Checkbox/Checkbox';

import open from '@/image/icon/open.svg';
import closed from '@/image/icon/closed.svg';
import milestone from '@/image/icon/milestone_s.svg';
import comment from '@/image/icon/comment.svg';

const List = ({ isOpen }) => {
  return (
    <Wrap>
      <ContentWrap>
        <CheckboxTitleLabelWrap>
          <CheckboxWrap>
            <Checkbox />
          </CheckboxWrap>
          {isOpen ? <StateIcon src={open} /> : <StateIcon src={closed} />}
          <TitleLabelWrap>
            <Title>feat : 이슈리스트 반응형 UI 제작</Title>
            <LabelWrap>
              <Label>feature</Label>
              <Label>UI</Label>
            </LabelWrap>
          </TitleLabelWrap>
        </CheckboxTitleLabelWrap>
        <InformationWrap>
          <IssueNumber>#1</IssueNumber>
          <Information>opened 9 days ago by hyewon3938</Information>
          <Milestone>
            <img src={milestone} />
            week 1
          </Milestone>
        </InformationWrap>
      </ContentWrap>
      <CommentsWrap>
        <img src={comment} /> 2
      </CommentsWrap>
    </Wrap>
  );
};

export default List;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  min-width: 100%;
  min-height: 73px;
  border-bottom: solid 1px ${({ theme }) => theme.Main.list.border};
  padding: 15px;
  &:hover {
    background: ${({ theme }) => theme.Main.list.hover};
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    padding: 10px;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StateIcon = styled.img`
  width: 18px;
  margin: 0 10px;
  @media only screen and (max-width: ${mobileModeWidth}) {
    margin: 0 10px 0 0;
  }
`;

const CheckboxWrap = styled.div`
  @media only screen and (max-width: ${mobileModeWidth}) {
    display: none;
  }
`;

const CheckboxTitleLabelWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleLabelWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (max-width: ${mobileModeWidth}) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: bold;
  cursor: pointer;
  @media only screen and (max-width: ${mobileModeWidth}) {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const LabelWrap = styled.div`
  display: flex;
`;

const Label = styled.div`
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

const IssueNumber = styled.span``;

const Information = styled.span`
  margin: 0 0 0 10px;
  @media only screen and (max-width: ${mobileModeWidth}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

const Milestone = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 15px;
  cursor: pointer;
  img {
    width: 13px;
    margin: 0 4px 0 0;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    display: none;
  }
`;

const InformationWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: gray;
  margin: 10px 0 0 55px;
  @media only screen and (max-width: ${mobileModeWidth}) {
    margin: 10px 10px 0 35px;
  }
`;

const CommentsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.small};

  img {
    width: 13px;
    margin: 0 5px 0 10px;
  }
`;
