import React from 'react';
import styled from 'styled-components';

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
`;
