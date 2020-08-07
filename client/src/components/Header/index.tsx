import React from 'react';
import { Link } from 'react-router-dom';

import { Header, TopBar, LogoIcon, BackIcon, HeaderContent } from './styles';

interface HeaderContainerProps {
  title: string;
  description?: string;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ title, description, children }) => {
  return (
    <Header>
      <TopBar>
        <Link to="/">
          <BackIcon />
        </Link>
        <LogoIcon />
      </TopBar>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </Header>
  );
};

export default HeaderContainer;
