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
    font-weight:${({ theme }) => theme.typography.fontWeights.regular};
    background: rgb(121,9,98);
    background: linear-gradient(90deg, rgba(121,9,98,0.085) 0%, rgba(254,254,254,0.5) 45%, rgba(168,199,205,0.3) 80%);
    color: ${({ theme }) => theme.colors.primary.dark};
    min-height: 100vh;
    margin: 0 auto;
  }
`;
