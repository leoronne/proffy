import styled from 'styled-components';

import { ReactComponent as Warning } from '~/assets/svg/warning.svg';

export const Container = styled.div`
  width: 100vw;

  #page-teacher-form {
    height: 100vh;
    width: 100%;
  }

  @media (min-width: 700px) {
    #page-teacher-form {
      max-width: 100%;
    }
  }
`;

export const Main = styled.main`
  background-color: var(--color-box-base);
  width: 90%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -4rem auto 4rem;
  padding-top: 6.4rem;
  overflow: hidden;

  label {
    color: var(--color-text-complement);
  }

  fieldset {
    border: 0;
    padding: 0 2.4rem;

    legend {
      font: 700 2.1rem 'Poppins';
      color: var(--color-text-title);
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-line-in-white);

      button {
        background-color: transparent;
        color: var(--color-primary);
        font: 600 1.6rem 'Poppins';
      }
    }
  }

  fieldset + fieldset {
    margin-top: 5.4rem;
  }

  @media (min-width: 700px) {
    fieldset {
      padding: 0 6.4rem;
    }
  }
`;

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }
`;

export const FormFooter = styled.footer`
  padding: 3rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
  }

  button {
    width: 100%;
    height: 5.6rem;
    background-color: var(--color-secondary);
    color: var(--color-button-text);
    font: 700 1.6rem 'Poppins';
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-top: 3.2rem;
  }

  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      justify-content: space-between;
    }

    button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;

export const WarningIcon = styled(Warning)`
  width: auto;
  margin-right: 2rem;
`;
