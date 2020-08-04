import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';


import { Container, Wrapper, LogoIcon, LandingImg, ButtonContainer, StudyIcon, ClassIcon, PurpleHeartIcon } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <Container id="page-landing">
      <div className="container" id="page-landing-content">
        <Wrapper>
          <LogoIcon />
          <h2>Sua plataforma de estudos online.</h2>
        </Wrapper>
        <LandingImg />
        <ButtonContainer>
          <Link to="/study" className="study">
            <StudyIcon />
            Estudar
          </Link>
          <Link to="/classes" className="give-classes">
            <ClassIcon />
            Dar aulas
          </Link>
        </ButtonContainer>

        <span className="total-connections">
          Total de 200 conexões
          <PurpleHeartIcon />
        </span>
      </div>
      <ReactTooltip type="dark" effect="solid" />
    </Container>
  );
};

export default TeacherForm;
