const fontSize = {
  micro: '8px',
  small: '12px',
  base: '14px',
  regular: '16px',
  large: '20px',
  xLarge: '24px',
  title: '32px'
};

const color = {
  themeWine: '#35282d',
  themeLightWine: '#b9a5b0',
  themeBlue: '#3B7AE4',
  themeDarkBlue: '#416bb4',
  themeSuperLightIvory: '#f3f1e9',
  themeLightIvory: '#e2e0d6',
  themeIvory: '#c4c2b9'
};

const header = {
  background: color.themeWine,
  menuHover: color.themeLightWine
};

const Main = {
  filter: {
    buttonBackground: color.themeLightIvory,
    inputHover: color.themeLightWine,
    border: color.themeIvory,
    buttonHover: color.themeSuperLightIvory
  },
  labelMilestoneTap: {
    border: color.themeIvory,
    hover: color.themeLightIvory
  },
  newIssueButton: {
    background: color.themeBlue,
    hover: color.themeDarkBlue
  }
};

export default { fontSize, color, header, Main };
