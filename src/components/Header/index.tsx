import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

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
  style?: StyleProp<ViewStyle>;
};

const Header: React.FC<Props> = ({ title, description, style }) => {
  return (
    <Container style={style}>
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
