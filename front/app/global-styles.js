import { createGlobalStyle } from 'styled-components';

export const colors = {
  palette: {
    primary: '#007bff',
    secondary: '#42c0fb',
    button: '#084da7',
    border: '#02367a',
    backgroundLoading: 'rgba(0, 0, 0, 0.3)',
    error: 'rgb(164, 38, 44)',
    black: '#000',
    gray1: '#8c8989',
    gray2: '#8c8989',
    white: '#fff',
  },
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f7f7f7;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
