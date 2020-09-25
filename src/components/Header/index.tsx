import React from 'react';

import {
  Container,
  TitleContainer,
  Title,
  DescriptionContainer,
  Description,
} from './styles';

type Props = {
  title: string;
  description?: string;
};

const Header: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      {!!description && (
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
      )}
    </Container>
  );
};

export default Header;
