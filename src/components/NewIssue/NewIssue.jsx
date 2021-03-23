import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { mobileModeWidth, responsiveHeight, tabletModeWidth } from '@/common/constants/responsiveSize';

import Wrap from '@/components/UI/Layout/Wrap';
import BlueButton from '@/components/UI/Button/BlueButton';

import profile from '@/image/profile.jpg';

const NewIssue = () => {
  const history = useHistory();

  const [currentLength, setCurrentLength] = useState();
  const [activeSubmitButton, setActiveSubmitButton] = useState(false);

  const uploadImage = (e) => {
    const currentFile = e.target.files[0];
    console.log(currentFile);
  };

  let debounceCheck = null;

  const showContentLength = (e) => {
    const currentValueLength = e.target.value.length;

    if (debounceCheck) {
      clearTimeout(debounceCheck);
    }
    debounceCheck = setTimeout(() => {
      setCurrentLength(currentValueLength + ' characters');
      setTimeout(() => {
        setCurrentLength('');
      }, 2000);
    }, 2000);
  };

  const activateSubmitButton = (e) => {
    const contentLength = e.target.value.length;
    contentLength > 0 ? setActiveSubmitButton(true) : setActiveSubmitButton(false);
  };

  const cancelButtonClickHandler = () => {
    history.push('/');
  };

  return (
    <Wrap>
      <NewIssueContentWrap>
        <WriterProfile src={profile} />
        <IssueContentWrap>
          <Square></Square>
          <TitleInput onKeyUp={activateSubmitButton} placeholder="Title" />
          <CommentWrap>
            <WriteButton>Write</WriteButton>
          </CommentWrap>
          <CommentImageButtonWrap>
            <ContentLength>{currentLength}</ContentLength>
            <CommentTextarea onKeyUp={showContentLength} placeholder="Leave a comment"></CommentTextarea>
            <ImageAttachButton htmlFor="file">Attach files by selecting here</ImageAttachButton>
            <Input id="file" type="file" accept=".jpg, .jpeg, .png" onChange={uploadImage} />
          </CommentImageButtonWrap>
          <CancelSubmitButtonWrap>
            <CancelButton onClick={cancelButtonClickHandler}>Cancel</CancelButton>
            <SubmitButtonWrap>
              {!activeSubmitButton ? (
                <BlueButton type="smallBlock" title="Submit new issue" />
              ) : (
                <BlueButton type="small" title="Submit new issue" />
              )}
            </SubmitButtonWrap>
          </CancelSubmitButtonWrap>
        </IssueContentWrap>
        <SidebarWrap></SidebarWrap>
        <MobileSubmitButtonWrap>
          <BlueButton title="Submit new issue" />
        </MobileSubmitButtonWrap>
      </NewIssueContentWrap>
    </Wrap>
  );
};

export default NewIssue;

const NewIssueContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  @media only screen and (max-width: ${tabletModeWidth}) {
    width: 100%;
    margin: 20px 0 0 0;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    align-items: center;
    flex-direction: column;
  }
`;

const WriterProfile = styled.img`
  width: 45px;
  border-radius: 45px;
  @media only screen and (max-width: ${mobileModeWidth}) {
    display: none;
  }
`;

const IssueContentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  /* min-width: 400px; */
  height: 100%;
  border: 1px solid ${({ theme }) => theme.NewIssue.content.border};
  border-radius: 5px;
  margin: 0 20px;
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 100%;
    margin: 0;
    border: none;
  }
`;

const SidebarWrap = styled.div`
  width: 25%;
  min-width: 200px;
  height: 350px;
  border: 1px solid red;
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 100%;
  }
`;

const Square = styled.div`
  position: absolute;
  top: 15px;
  left: -8px;
  width: 15px;
  height: 15px;
  background: white;
  border: 1px solid ${({ theme }) => theme.NewIssue.content.border};
  border-right: none;
  border-top: none;
  transform: rotate(45deg);
  @media only screen and (max-width: ${mobileModeWidth}) {
    display: none;
  }
`;

const TitleInput = styled.input`
  width: 95%;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.NewIssue.content.border};
  border-radius: 5px;
  background: ${({ theme }) => theme.NewIssue.content.inputBackground};
  margin: 10px 0 0 0;
  padding: 8px 10px;
  &:focus {
    outline: 0;
    box-shadow: 0 0 3px 2px ${({ theme }) => theme.NewIssue.content.inputHover};
  }
`;

const CommentWrap = styled.div`
  position: relative;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.NewIssue.content.border};
  margin: 60px 0 0 0;
`;

const WriteButton = styled.button`
  position: absolute;
  top: -40px;
  left: 16px;
  width: 80px;
  height: 40px;
  background: white;
  border: 1px solid ${({ theme }) => theme.NewIssue.content.border};
  border-bottom: 1px solid white;
`;

const CommentImageButtonWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const CommentTextarea = styled.textarea`
  width: 95%;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.NewIssue.content.border};
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  background: ${({ theme }) => theme.NewIssue.content.inputBackground};
  margin: 15px 0 0 0;
  padding: 8px 10px;
  resize: vertical;
  &:focus {
    outline: 0;
    box-shadow: 0 0 3px 2px ${({ theme }) => theme.NewIssue.content.inputHover};
  }
`;

const ImageAttachButton = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.small};
  background: white;
  border: 1px solid ${({ theme }) => theme.NewIssue.content.border};
  border-top: 1px dotted ${({ theme }) => theme.NewIssue.content.border};
  border-radius: 0 0 5px 5px;
  padding: 0 10px;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
`;

const CancelSubmitButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 50px;
  @media only screen and (max-width: ${mobileModeWidth}) {
    display: none;
  }
`;

const CancelButton = styled.button`
  cursor: pointer;
`;

const SubmitButtonWrap = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  margin: 0 0 0 10px;
`;

const MobileSubmitButtonWrap = styled.div`
  display: none;
  width: 95%;
  margin: 20px 0 30px 0;
  @media only screen and (max-width: ${mobileModeWidth}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContentLength = styled.div`
  position: absolute;
  display: block;
  bottom: 40px;
  right: 25px;
  font-size: ${({ theme }) => theme.fontSize.micro};
`;
