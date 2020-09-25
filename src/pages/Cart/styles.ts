import styled from 'styled-components/native';
import { colors } from '../../styles';

export const TotalContainer = styled.View`
  background-color: ${colors.white};
  border-top-width: 1px;
  border-color: ${colors.inactive};
  padding: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalDescription = styled.Text`
  color: ${colors.inactive};
  font-size: 16px;
  font-style: italic;
`;

export const TotalValuesContainer = styled.View`
  align-items: flex-end;
`;

export const TotalValue = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  font-size: 16px;
`;

export const TotalCount = styled.Text`
  color: ${colors.inactive};
  font-weight: normal;
  font-size: 12px;
`;
