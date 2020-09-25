import React from 'react';
import { Text } from 'react-native';

// import { Container } from './styles';

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return <Text>{title}</Text>;
};

export default Header;
