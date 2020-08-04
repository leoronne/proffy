import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --secondary: #04D361;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --transition-slow: 0.6s ease-in-out !important;
    --filter-transition: filter var(--transition-slow);
    --hover-effect: brightness(1.1);

    --color-background: #F0F0F7;
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secondary: #04D361;
    --color-secondary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #6A6180;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;

    font-size: 60%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    outline: 0;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, button, input, textarea {
    outline: 0;
    font-family: 'Poppins', 'Roboto', 'Archivo', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--color-text-base);
  }

  a {
    transition: var(--filter-transition);
  }

  a:hover{
    transition: var(--filter-transition);
    filter: var(--hover-effect);
  }
  input {
    border: 1px solid transparent !important;
    transition: 0.7s !important;
  }
  
  input:focus {
    outline: none !important;
    border: 1px solid var(--color-primary) !important;
    transition: 0.7s !important;
    box-shadow: 0px 0px 1px var(--color-primary);
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #3333;
  }

  ::-webkit-scrollbar-thumb {
    background: #89777a;
    border-radius: 4px;
    transition: 0.6s ease-in-out !important;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #333333;
    transition: 0.6s ease-in-out !important;
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
