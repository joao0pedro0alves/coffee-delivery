import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  h1, h2, h3 {
    line-height: 130%;
  }

  .Container {
    width: 100%;
    max-width: 90rem; // 1440px
    padding-right: 10rem;
    padding-left: 10rem;
    margin-left: auto;
    margin-right: auto;

    // md
    @media (max-width: 768px) {
      padding-right: 1rem;
      padding-left: 1rem;
    }
  }
`
