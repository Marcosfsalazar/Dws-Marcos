import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.colors.neutral.lightest};
    color: ${({ theme }) => theme.colors.primary.dark};
    min-height: 100vh;
    margin: 0 auto;
   padding: 2rem;
   text-align: center;
  }
`;
