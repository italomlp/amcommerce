import styled from 'styled-components/native';
import { Input as AppInput, Button as AppButton } from '../../components';
import { colors } from '../../styles';

export const SearchContainer = styled.View`
  flex-direction: row;
  padding: 0 8px;
  margin-bottom: 8px;
`;

export const OrderByContainer = styled.View`
  flex-direction: row;
  padding: 0 8px;
  margin-bottom: 8px;
`;

export const OrderByDescription = styled.Text`
  align-self: center;
`;

type OrderByButtonProps = {
  selected?: boolean;
};

export const OrderByButton = styled.TouchableOpacity<OrderByButtonProps>`
  border-width: 1px;
  border-radius: 6px;
  padding: 4px;
  border-color: ${colors.primary};
  background-color: ${props =>
    props.selected ? colors.primary : 'transparent'};
`;

export const OrderByButtonText = styled.Text<OrderByButtonProps>`
  color: ${props => (props.selected ? colors.white : colors.black)};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
`;

export const OrderByLineSeparator = styled.View`
  width: 1px;
  background-color: ${colors.black};
  margin: 0 8px;
`;

export const Input = styled(AppInput)`
  margin-right: 8px;
  flex: 1;
`;

export const Button = styled(AppButton)``;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  color: colors.primary,
  size: 24,
}))``;

export const ErrorText = styled.Text`
  color: ${colors.error};
  font-size: 14px;
  font-style: italic;
  text-align: center;
`;
