import styled from 'styled-components/native';

import { colors } from '../../styles';

const ColorsMappings = {
  primary: {
    bg: colors.primary,
    text: colors.lightText,
  },
  secondary: {
    bg: colors.secondary,
    text: colors.lightText,
  },
};

export type StyledButtonProps = {
  color: keyof typeof ColorsMappings;
};

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  background-color: ${props => ColorsMappings[props.color].bg};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
`;

export const StyledButtonText = styled.Text<StyledButtonProps>`
  color: ${props => ColorsMappings[props.color].text};
  font-weight: bold;
  font-size: 14px;
`;
