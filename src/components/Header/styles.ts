import styled from 'styled-components/native';

import { colors } from '../../styles';

export const Container = styled.View`
  margin: 8px 8px 16px;
`;

export const TitleContainer = styled.View`
  border-bottom-width: 1px;
  border-color: ${colors.secondary};
  padding: 4px;
  margin-bottom: 4px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const DescriptionContainer = styled.View`
  padding: 4px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${colors.darkText};
`;
