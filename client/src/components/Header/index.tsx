import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { useTranslation } from 'react-i18next';

import { Header, TopBar, LogoIcon, BackIcon, HeaderContent } from './styles';

interface HeaderContainerProps {
  title: string;
  description?: string;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ title, description, children }) => {
  const { t } = useTranslation();
  return (
    <Header>
      <TopBar>
        <Link to="/">
          <BackIcon data-tip={t('return')} />
        </Link>
        <LogoIcon />
      </TopBar>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
      <ReactTooltip type="dark" effect="solid" place="bottom" />
    </Header>
  );
};

export default HeaderContainer;
