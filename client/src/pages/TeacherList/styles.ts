import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  #page-teacher-list {
    height: 100vh;
    width: 100%;
  }

  #search-teachers {
    margin-top: 3.2rem;
  }

  @media (min-width: 700px) {
    #page-teacher-list {
      max-width: 100%;
    }

    #search-teachers {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -35px;
    }
  }
`;

export const InputBlock = styled.div`
  position: relative;
  transition: 0.7s ease;
  margin-top: 1.4rem;

  label {
    color: var(--color-text-in-primary);
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Poppins;
    transition: 0.7s ease;
  }

  &:focus-within::after {
    transition: 0.7s ease;
    width: calc(100% -3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;
