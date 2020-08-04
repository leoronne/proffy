import styled from 'styled-components';

import { ReactComponent as Logo } from '~/assets/svg/logo.svg';
import { ReactComponent as Landing } from '~/assets/svg/landing.svg';
import { ReactComponent as Study } from '~/assets/svg/study.svg';
import { ReactComponent as Class } from '~/assets/svg/give-classes.svg';
import { ReactComponent as PurpleHeart } from '~/assets/svg/purple-heart.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  .total-connections {
    font-size: 1.4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: total;
  }

  @media (min-width: 1100px) {
    #page-landing-content {
      max-width: 1100px;

      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas:
        'logo hero hero'
        'buttons buttons total';
    }

    .total-connections {
      justify-self: end;
    }
  }
`;

export const Wrapper = styled.div`
  grid-area: logo;
  text-align: center;
  margin-bottom: 3.2rem;
  align-self: center;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    margin: 0;
    text-align: left;

    h2 {
      text-align: initial;
      font-size: 2.8rem;
    }
  }
`;

export const LogoIcon = styled(Logo)`
  height: 10rem;
  width: 90%;

  @media (min-width: 1100px) {
    height: 100%;
  }
`;

export const LandingImg = styled(Landing)`
  @media (max-width: 400px) {
    display: none;
  }
  @media (max-height: 710px) {
    display: none;
  }

  width: 100%;
  grid-area: hero;

  @media (min-width: 1100px) {
    justify-self: end;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.2rem 0;
  grid-area: buttons;

  a:first-child {
    margin-right: 1.6rem;
  }

  a {
    width: 30rem;
    height: 8.4rem;
    border-radius: 0.8rem;
    font: 600 2rem 'Poppins';

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: var(--color-button-text);
  }

  a.study {
    background: var(--color-primary-lighter);
  }

  a.study:hover {
    background: var(--color-primary-lighter);
  }

  a.give-classes {
    background: var(--color-secondary);
  }

  a.give-classes:hover {
    background: var(--color-secondary);
  }

  @media (max-width: 400px) {
    a {
      font: 600 1.6rem 'Poppins' !important;
    }
  }

  @media (min-width: 1100px) {
    justify-content: flex-start;
    a {
      font-size: 2.4re;
    }
  }
`;

export const StudyIcon = styled(Study)`
  width: 4rem;
  margin-right: 2.4rem;

  @media (max-width: 400px) {
    margin-right: 0.6rem;
  }
`;

export const ClassIcon = styled(Class)`
  width: 4rem;
  margin-right: 2.4rem;

  @media (max-width: 400px) {
    margin-right: 0.6rem;
  }
`;

export const PurpleHeartIcon = styled(PurpleHeart)`
  margin-left: 0.8rem;
`;
