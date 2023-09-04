import { createGlobalStyle } from 'styled-components';
import { themes } from '~lib/styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    ${themes.light}
    font-family: 'Open Sans', sans-serif !important;
    font-size: 16px;
  }
`;

export default GlobalStyle;