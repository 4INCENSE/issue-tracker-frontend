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
  themeTransparentBlue: 'rgba(59, 121, 228, 0.719)',
  themeDarkBlue: '#416bb4',
  themeSuperLightIvory: '#f3f1e9',
  themeLightIvory: '#e2e0d6',
  themeIvory: '#c4c2b9'
};

const themeColor = {
  border: color.themeIvory,
  inputHover: color.themeLightWine,
  buttonBackground: color.themeBlue,
  buttonHover: color.themeDarkBlue
};

const header = {
  background: color.themeWine,
  menuHover: color.themeBlue
};

const Main = {
  filter: {
    buttonBackground: color.themeSuperLightIvory,
    inputHover: themeColor.inputHover,
    border: themeColor.border,
    buttonHover: color.themeSuperLightIvory
  },
  labelMilestoneTap: {
    border: color.themeIvory,
    hover: color.themeLightIvory,
    tapNumber: color.themeIvory
  },
  newIssueButton: {
    background: themeColor.buttonBackground,
    hover: themeColor.buttonHover,
    mobileBackground: color.themeTransparentBlue
  },
  filterButton: {
    border: themeColor.border
  },
  list: {
    border: themeColor.border,
    background: color.themeSuperLightIvory,
    hover: color.themeSuperLightIvory
  },
  resetQueryButton: {
    hover: color.themeDarkBlue
  }
};

const NewIssue = {
  content: {
    border: themeColor.border,
    inputHover: themeColor.inputHover,
    inputBackground: color.themeSuperLightIvory
  },
  submitButton: {
    background: themeColor.buttonBackground,
    hover: themeColor.buttonHover
  }
};

export default { fontSize, color, header, Main, NewIssue };
