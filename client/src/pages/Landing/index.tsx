import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';
import { ClipLoader } from 'react-spinners';

import { Container, Wrapper, LogoIcon, LandingImg, ButtonContainer, StudyIcon, ClassIcon, PurpleHeartIcon } from './styles';
import api from '../../services/api';
import notify from '../../services/toast';

const Landing: React.FC = () => {
  const { t } = useTranslation();
  document.title = `Proffy`;
  const [loading, setLoading] = useState(false);
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    async function loadConnections() {
      try {
        setLoading(true);
        const response = await api.get('/connections');
        const { data } = response;
        setConnections(data.total);
      } catch (err) {
        notify(err?.response?.data?.error ? err.response.data.error : err.message, 'error');
      } finally {
        setLoading(false);
      }
    }

    loadConnections();
  }, []);

  return (
    <Container id="page-landing">
      <div className="container" id="page-landing-content">
        <Wrapper>
          <LogoIcon />
          <h2>{t('landintTitle')}</h2>
        </Wrapper>
        <LandingImg />
        <ButtonContainer>
          <Link to="/study" className="study" data-tip={`${t('want')} ${t('study')}?`}>
            <StudyIcon />
            {t('study')}
          </Link>
          <Link to="/classes" className="give-classes" data-tip={`${t('want')} ${t('class')}?`}>
            <ClassIcon />
            {t('class')}
          </Link>
        </ButtonContainer>

        <span className="total-connections">
          {`${t('connections1')} `}
          {loading ? (
            <div style={{ margin: '0 7px' }}>
              <ClipLoader size={15} color="#ccc" />
            </div>
          ) : (
            connections
          )}
          {` ${t('connections2')}`}
          <PurpleHeartIcon />
        </span>
      </div>
      <ReactTooltip type="dark" effect="solid" place="bottom" />
    </Container>
  );
};

export default Landing;
