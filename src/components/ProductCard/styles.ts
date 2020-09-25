import styled from 'styled-components/native';
import { lighten, darken } from 'polished';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../styles';

export const Container = styled.View`
  margin: 8px;
  border-color: ${colors.secondary};
  border-width: 1px;
  border-radius: 16px;
  background-color: ${lighten(0.3, colors.black)};
  overflow: hidden;
  shadow-color: #000;
  shadow-offset: 0 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4.65px;
  elevation: 8;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 200px;
  max-height: 200px;
  background-color: red;
`;

export const Image = styled.Image.attrs(() => ({
  height: 200,
  width: '100%',
}))`
  height: 200px;
  width: 100%;
`;

export const TextContainer = styled.View`
  padding: 8px;
  margin-bottom: 4px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
`;

type PriceProps = {
  cut?: boolean;
};

export const Price = styled.Text<PriceProps>`
  font-size: 16px;
  font-weight: ${props => (props.cut ? 'normal' : 'bold')};
  color: ${colors.lightText};
  margin: 4px 8px 4px 0;
  text-decoration: ${props => (props.cut ? 'line-through' : 'none')};
  text-decoration-color: ${colors.lightText};
  opacity: ${props => (props.cut ? 0.5 : '1')};
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.lightText};
`;

export const Rating = styled.Text`
  font-size: 14px;
  color: ${colors.lightText};
`;

export const RatingIcon = styled(Icon).attrs(() => ({
  size: 14,
  color: colors.warning,
}))``;

export const BuyContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 8px;
`;

export const BuyButton = styled.TouchableOpacity``;

export const BuyText = styled.Text`
  color: ${colors.primary};
  font-size: 16px;
`;
