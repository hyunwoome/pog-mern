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
    font-family: 'Apple SD Gothic Neo','Noto Sans KR', Roboto,'맑은고딕','Nanum Gothic',sans-serif;
  
    // * Global Variable //

    // ! Font
    --font-xl: 1.3rem;
    --font-lg: 1.125rem;
    --font-md: 1rem;
    --font-sm: 0.75rem; 
    --font-button: 0.875rem;

    // ! Colors
    --color-background-base: #f2f2f2;
    --color-background: #fff;
    --color-border: #e6e6e6;
    --color-button-disable: #bbbbbb;
    --color-button-default: #707070;
    --color-button-primary: #2296f2;
    --color-button-secondary:#ff81aa;
    --color-font-gray: #666666;

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
