import React from 'react';

import { TeacherMain, WhatsAppIcon } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <TeacherMain>
    <article>
      <header>
        <img src="https://avatars1.githubusercontent.com/u/47757685?s=460&v=4" alt="Teacher" />
        <div>
          <strong>Leonardo Ronne</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>Passionate about everything that involves technology and programming.</p>
      <footer>
        <p>
          Preço/hora:
          <strong>R$ 80.00</strong>
        </p>
        <button type="button">
          <WhatsAppIcon />
          Entrar em contato
        </button>
      </footer>
    </article>
      <article>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/47757685?s=460&v=4" alt="Teacher" />
          <div>
            <strong>Leonardo Ronne</strong>
            <span>Programação</span>
          </div>
        </header>

        <p>Passionate about everything that involves technology and programming.</p>
        <footer>
          <p>
            Preço/hora:
            <strong>R$ 80.00</strong>
          </p>
          <button type="button">
            <WhatsAppIcon />
            Entrar em contato
          </button>
        </footer>
      </article>
      <article>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/47757685?s=460&v=4" alt="Teacher" />
          <div>
            <strong>Leonardo Ronne</strong>
            <span>Programação</span>
          </div>
        </header>

        <p>Passionate about everything that involves technology and programming.</p>
        <footer>
          <p>
            Preço/hora:
            <strong>R$ 80.00</strong>
          </p>
          <button type="button">
            <WhatsAppIcon />
            Entrar em contato
          </button>
        </footer>
      </article>
    </TeacherMain>
  );
};

export default TeacherItem;
