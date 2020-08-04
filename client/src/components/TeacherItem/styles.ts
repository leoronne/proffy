import styled from 'styled-components';

import { ReactComponent as WhatsApp } from '~/assets/svg/whatsapp.svg';

export const TeacherMain = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  article {
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;

    header {
      padding: 3.2rem 2rem;
      display: flex;
      align-items: center;

      img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
      }

      div {
        margin-left: 2.4rem;

        strong {
          font: 700 2.4rem Poppins;
          display: block;
          color: var(--color-text-title);
        }

        span {
          font-size: 1.6rem;
          display: block;
          margin-top: 0.4rem;
        }
      }
    }

    > p {
      padding: 0 2rem;
      font-size: 1.6rem;
      line-height: 2.8rem;
    }

    footer {
      margin-top: 15px;
      padding: 2rem 2rem;
      background: var(--color-box-footer);
      border-top: 1px solid var(--color-line-in-white);
      display: flex;
      align-items: center;
      justify-content: space-between;

      p strong {
        color: var(--color-primary);
        font-size: 1.6rem;
        display: block;
      }

      button {
        width: 20rem;
        height: 5.6rem;
        background: var(--color-secondary);
        color: var(--color-button-text);
        cursor: pointer;
        border: 0;
        border-radius: 0.8rem;
        font: 700 1.4rem Poppins;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: var(--filter-transition);
      }

      button:hover {
        transition: var(--filter-transition);
        filter: var(--hover-effect);
      }
    }
  }

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;

    article header,
    article footer {
      padding: 3.2rem;
    }

    article > p {
      padding: 0 3.2rem;
    }

    article footer {
      p strong {
        display: initial;
        margin-left: 1.6rem;
      }

      button {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
      }
    }
  }
`;

export const WhatsAppIcon = styled(WhatsApp)`
  height: 1.6rem;
  width: auto;

  @media (min-width: 700px) {
    margin-right: 1.6rem;
  }
`;
