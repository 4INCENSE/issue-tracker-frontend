import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from '@/components/style/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html * {
    box-sizing: border-box;
    font-size: ${theme.fontSize.base};
    font-family: "Roboto", "Apple SD Gothic Neo", "Helvetica", "Arial", sans-serif;
  }
  button {
    background: none;
    border: 0;
    outline : 0;
  }
  @font-face { font-family: 'GmarketSansLight'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff'); font-weight: normal; font-style: normal; }
  `;

const GlobalStyleProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default GlobalStyleProvider;
