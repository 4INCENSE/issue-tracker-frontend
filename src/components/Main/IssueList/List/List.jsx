import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { mobileModeWidth, tabletModeWidth } from '@/common/constants/responsiveSize';

import Checkbox from '@/components/UI/Checkbox/Checkbox';
import Label from '@/components/Main/IssueList/List/Label/Label';

import open from '@/image/icon/open.svg';
import closed from '@/image/icon/closed.svg';
import milestone from '@/image/icon/milestone_s.svg';
import comment from '@/image/icon/comment.svg';

const List = ({
  data: { id, title, isOpened, date, writerName, writerImage, milestoneTitle, commentCount, labels },
  allChecked
}) => {
  return (
    <Wrap>
      <ContentWrap>
        <CheckboxTitleLabelWrap>
          <CheckboxWrap>
            <Checkbox id={id} checked={allChecked} />
          </CheckboxWrap>
          {isOpened == 'y' ? <StateIcon src={open} /> : <StateIcon src={closed} />}
          <TitleLabelWrap>
            <Title>{title}</Title>
            <LabelWrap>
              {labels.map((labels, index) => {
                return (
                  <Label
                    key={index}
                    id={labels.id}
                    title={labels.title}
                    textColor={labels.textColor}
                    backgroundColor={labels.backgroundColor}
                  />
                );
              })}
            </LabelWrap>
          </TitleLabelWrap>
        </CheckboxTitleLabelWrap>
        <InformationWrap>
          <IssueNumber>#{id}</IssueNumber>
          <Information>
            opened {date} by {writerName}
          </Information>
          {milestoneTitle == '' ? (
            ''
          ) : (
            <Milestone>
              <img src={milestone} />
              {milestoneTitle}
            </Milestone>
          )}
        </InformationWrap>
      </ContentWrap>
      {commentCount <= 0 ? (
        ''
      ) : (
        <CommentsWrap>
          <img src={comment} />
          {commentCount}
        </CommentsWrap>
      )}
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
  @media only screen and (max-width: ${mobileModeWidth}) {
    display: none;
  }
`;
