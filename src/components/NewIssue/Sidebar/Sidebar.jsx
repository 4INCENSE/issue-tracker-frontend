import React from 'react';
import styled from 'styled-components';

import SidebarItem from '@/components/NewIssue/Sidebar/SidebarItem/SidebarItem';

const Sidebar = () => {
  return (
    <>
      <Wrap>
        <SidebarItem title="Assignee" />
        <SidebarItem title="Labels" />
        <SidebarItem title="Milestone" />
      </Wrap>
    </>
  );
};

export default Sidebar;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
