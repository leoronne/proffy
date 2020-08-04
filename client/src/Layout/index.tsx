import React from 'react';
import ReactTooltip from 'react-tooltip';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
      </Wrapper>
      <ReactTooltip type="dark" effect="solid" />
    </Container>
  );
};

export default Layout;
