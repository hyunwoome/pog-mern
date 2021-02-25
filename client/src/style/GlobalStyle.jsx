import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background-color: #f2f2f2;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles;
