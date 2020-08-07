import styled from 'styled-components';

import { ReactComponent as Logo } from '~/assets/svg/logo.svg';
import { ReactComponent as Back } from '~/assets/svg/back.svg';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  @media (min-width: 700px) {
    height: 340px;
  }
`;

export const TopBar = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1.6rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color-text-in-primary);

  a {
    height: 3.2rem;
    display: flex;
    align-items: center;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font: 700 3.6rem Poppins;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin: 2.4rem 0;
  }

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const LogoIcon = styled(Logo)`
  height: 1.6rem;
  width: auto;
`;

export const BackIcon = styled(Back)`
  height: 1.6rem;
  width: auto;
`;
