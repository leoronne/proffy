import styled from 'styled-components';

export const InputBlock = styled.div`
  position: relative;
  transition: 0.7s ease;
  margin-top: 1.9rem;

  label {
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
    min-height: 9.2rem;
    max-height: 20rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Poppins;
    transition: 0.7s ease;
    resize: vertical;
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
    bottom: 8px;
  }
`;
