import styled from 'styled-components/native';
import { colors } from '../../styles';

export const StyledInput = styled.TextInput`
  border-radius: 8px;
  color: ${colors.darkText};
  font-size: 12px;
  padding: 4px 8px;
  border-color: ${colors.primary};
  border-width: 2px;
`;
