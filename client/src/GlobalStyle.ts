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
    font-family: 'Apple SD Gothic Neo', Roboto,'맑은고딕','Nanum Gothic',sans-serif;

    // ! Font
    --font-xl: 1.3rem;
    --font-lg: 1.125rem;
    --font-md: 1rem;
    --font-sm: 0.75rem; 
    --font-button: 0.875rem;

    // 아직 미적용
    --font-xs: 0.625rem;  // Sub
    --font-sm: 0.75rem;   // Button
    --font-md: 0.875rem;  // Product Title
    --font-lg: 1rem;      // Price
    --font-xl: 1.125rem;  // MenuTitle
    --font-xxl: 1.25rem;  // Title

    // ! Colors
    --color-background-base: #f2f2f2;
    --color-background: #fff;
    --color-border: #e6e6e6;
    --color-button-disable: #bbbbbb;
    --color-button-default: #707070;
    --color-button-primary: #ff395c;
    --color-button-secondary:#ff395c;
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
