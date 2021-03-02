import React from 'react';
import styled from 'styled-components';

import ListHead from '@/components/Main/IssueList/ListHead/ListHead';
import List from '@/components/Main/IssueList/List/List';

const IssueList = () => {
  return (
    <Wrap>
      <ListHead />
      <List isOpen={true} />
      <List isOpen={false} />
      <List isOpen={false} />
      <List isOpen={true} />
      <List isOpen={true} />
      <List isOpen={true} />
    </Wrap>
  );
};

export default IssueList;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: solid 1px ${({ theme }) => theme.Main.List.border};
  border-bottom: none;
`;
