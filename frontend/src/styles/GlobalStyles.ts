import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Red Hat Text', sans-serif; /* Aplica a fonte do design */
  }

  body {
    background-color: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }
`;