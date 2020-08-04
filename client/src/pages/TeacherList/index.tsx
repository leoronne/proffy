import React from 'react';

import HeaderContainer from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';

import { Container, InputBlock } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <div className="container" id="page-teacher-list">
        <HeaderContainer title="Estes são os proffys disponíveis">
          <form id="search-teachers">
            <InputBlock>
              <label htmlFor="subject">Matéria</label>
              <input type="text" name="subject" id="subject" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="week-day">Dia da Semana</label>
              <input type="text" name="week-day" id="week-day" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="time">Hora</label>
              <input type="text" name="time" id="time" />
            </InputBlock>
          </form>
        </HeaderContainer>
        <TeacherItem />
      </div>
    </Container>
  );
};

export default TeacherList;
