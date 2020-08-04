import React from 'react';
import { Link } from 'react-router-dom';

import { Header, TopBar, LogoIcon, BackIcon, HeaderContent } from './styles';

interface HeaderContainerProps {
  title: string;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ title, children }) => {
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
        {children}
      </HeaderContent>
    </Header>
  );
};

export default HeaderContainer;
