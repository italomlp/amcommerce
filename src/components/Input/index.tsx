import React from 'react';
import { TextInputProps } from 'react-native';

import { StyledInput } from './styles';

type Props = TextInputProps;

const Input: React.FC<Props> = props => {
  return <StyledInput {...props} />;
};

export default Input;
