import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url(//fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap);
  @import url(//fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap);
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
