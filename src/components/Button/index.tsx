import React from 'react';

import { TextStyle, ViewStyle, StyleProp } from 'react-native';

import { StyledButton, StyledButtonProps, StyledButtonText } from './styles';

type Props = Partial<StyledButtonProps> & {
  title: string;
  onPress?: () => unknown;
  styles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
};

const Button: React.FC<Props> = ({ title, onPress, color = 'primary' }) => {
  return (
    <StyledButton color={color} onPress={onPress}>
      <StyledButtonText color={color}>{title}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
