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
    --color-primary-lightest: #e6e0f6;
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

  body {
    background-color: var(--color-background);
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

  input, textarea {
    border: 1px solid transparent !important;
    transition: 0.9s ease-in-out;
  }
  
  textarea:focus {
    outline: none !important;
    border: 1px solid var(--color-primary) !important;
    transition: 0.9s ease-in-out;
    box-shadow: 0px 0px 1px var(--color-primary);
  }

  
  .react-tel-input .form-control:focus {
    outline: none !important;
    border: 1px solid var(--color-primary) !important;
    transition: 0.9s ease-in-out;
    box-shadow: 0px 0px 1px var(--color-primary);
  }
  
  input:focus {
    outline: none !important;
    border: 1px solid var(--color-primary) !important;
    transition: 0.9s ease-in-out;
    box-shadow: 0px 0px 1px var(--color-primary);
  }

  button {
    border: 0;
    border-radius: 0.8rem;
  }

  button:enabled{
    cursor: pointer;
    transition: var(--filter-transition);
  }

  button:disabled{
    cursor: not-allowed;
    background-color: var(--color-text-complement);
  }

  button:enabled:hover{
    transition: var(--filter-transition);
    filter: var(--hover-effect);
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

  .error {
    border: 1px solid #FF6565 !important;
  }

  .error-message {
    color: #FF6565;
    padding: 1px 2px;
    height: 1em;
    position: absolute;
    font-size: 12px;
    margin-top: 0px;
  }

  /* Modal */
  
  .modal-open {
    overflow: hidden;
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;
    scroll-behavior: smooth;
  }

  .modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
    transition: 0.3s ease-in-out;
  }

  .modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
  }

  .modal.fade .modal-dialog {
    transition: -webkit-transform 0.4s ease-out;
    transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
    -webkit-transform: translate(0, -25%);
    transform: translate(0, -25%);
  }

  .modal.show .modal-dialog {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  .modal-dialog-centered {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: calc(100% - (0.5rem * 2));
  }

  .modal-content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: var(--color-box-base);
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
  }

  .modal-backdrop.fade {
    opacity: 0;
  }

  .modal-backdrop.show {
    opacity: 0.5;
  }

  .modal-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid var(--color-primary-lightest);
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    height: 50px;
  }

  .modal-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
  }

  .modal-title {
    margin-bottom: 0 !important;
    line-height: 1.5 !important;
    color: var(--color-primary-darker) !important;
    font-weight: 600 !important;
  }

  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 10px;
    border-top: 1px solid var(--color-primary-lightest);
    height: 60px;
  }

  .modal-footer > :not(:first-child) {
    margin-left: 0.25rem;
  }

  .modal-footer > :not(:last-child) {
    margin-right: 0.25rem;
  }

  .modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    border: 0;
  }

  .sr-only-focusable:active,
  .sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
    -webkit-clip-path: none;
    clip-path: none;
  }

  .close {
    float: right;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1;
    color: var(--color-primary-light);
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
    outline: none;
    transition: 0.9s ease-in-out;
  }

  .close:hover,
  .close:focus {
    text-decoration: none;
    opacity: 0.75;
    transition: 0.9s ease-in-out;
  }

  .close:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .footer-buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-buttons button{
    width: 40% !important;
    background-color: var(--color-secondary);
    color: var(--color-button-text);
    font: 500 1.6rem 'Poppins';
    height: 40px;
  }

  button.close {
    transition: 0.9s ease-in-out;
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 500px;
      margin: 1.75rem auto;
    }
    .modal-dialog-centered {
      min-height: calc(100% - (1.75rem * 2));
    }
    .modal-sm {
      max-width: 300px;
    }
  }

  @media (min-width: 992px) {
    .modal-lg {
      max-width: 800px;
    }
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
