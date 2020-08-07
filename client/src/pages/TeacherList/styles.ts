import styled from 'styled-components';

import { AiOutlineClear } from 'react-icons/ai';

export const Container = styled.div`
  width: 100vw;
  #page-teacher-list {
    height: 100vh;
    width: 100%;
  }

  #search-teachers {
    margin-top: 3.2rem;
    position: relative;

    label {
      color: var(--color-text-in-primary);
    }
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

export const Content = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ClearIcon = styled(AiOutlineClear)`
  width: 25px;
  cursor: pointer;
  color: var(--color-text-in-primary);
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -1rem;
  transition: var(--filter-transition);

  &:hover {
    transition: var(--filter-transition);
    filter: var(--hover-effect);
  }
  
  @media (min-width: 700px) {
    margin-top: 1.4rem;
  }
`;
