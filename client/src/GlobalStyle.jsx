import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    background-color: var(--color-background-base);
    font-family: 'Noto Sans KR', sans-serif;
  
    // * Global Variable //

    // ! Font
    --font-button: 0.875rem;

    // ! Colors
    --color-background-base: #f2f2f2;
    --color-background: #fff;
    --color-button-default: #e0e0e0;
    --color-button-primary: #2296f2;
    --color-button-secondary:#ff81aa;

    // ! Paddings
    --padding-sm: 0.875rem;
    --padding-mobile: 1rem;
    --padding-laptop: 1.5rem;

    // ! Margins
    --margin-sm: 0.875rem;
    --padding-mobile: 1rem;
    --padding-laptop: 1.5rem;

    // ! Device
    --device-mobile: 600px;
  }
`;
