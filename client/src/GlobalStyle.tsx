import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    background-color: var(--color-background-base);
    font-family: 'Apple SD Gothic Neo', Roboto, Arial,'맑은고딕','Nanum Gothic',sans-serif;
    color: var(--color-font-default);

    // ! Font
    --font-xs: 0.625rem;  // Sub
    --font-sm: 0.75rem;   // Button
    --font-md: 0.875rem;  // Product Title
    --font-lg: 1rem;      // Price
    --font-xl: 1.125rem;  // MenuTitle
    --font-xxl: 1.25rem;  // Title

    // ! Colors
    --color-background-base: #f2f2f2;
    --color-background: #fff;
    --color-font-default: #1a1a1a;
    --color-font-gray: #666666;
    --color-border: #e6e6e6;
    --color-button-default: #707070;
    --color-button-disable: #bbbbbb;
    --color-button-primary: #0152cc;
    --color-button-secondary:#ff395c;
`;
