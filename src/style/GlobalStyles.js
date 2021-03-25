import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    margin : 0;
    background: ${({ theme }) => theme.background} !important;
    color: ${({ theme }) => theme.text} !important;
    border-color: ${({ theme }) => theme.vertical_border} !important;
    font-family: 'Lato', 'Noto Sans KR', sans-serif;
    transition: all 0.25s linear;
    -webkit-tap-highlight-color : transparent;
  }
  `;

export default GlobalStyles;
