import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Dimensions } from 'react-native';
import { Header as AppHeader } from '../../components';

import { colors } from '../../styles';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 16px;
`;

export const Header = styled(AppHeader)`
  flex: 1;
  margin-bottom: 2px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackButtonIcon = styled(Icon).attrs(() => ({
  size: 25,
  color: colors.primary,
}))``;

export const DescriptionText = styled.Text``;

const { width } = Dimensions.get('window');

export const Image = styled.Image`
  height: ${width}px;
  width: ${width}px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
`;

export const TextContainer = styled.View`
  padding: 16px;
`;

type PriceProps = {
  cut?: boolean;
};

export const Price = styled.Text<PriceProps>`
  font-size: 16px;
  font-weight: ${props => (props.cut ? 'normal' : 'bold')};
  color: ${colors.darkText};
  margin: 4px 8px 4px 0;
  text-decoration: ${props => (props.cut ? 'line-through' : 'none')};
  text-decoration-color: ${colors.darkText};
  opacity: ${props => (props.cut ? 0.5 : '1')};
`;

export const Rating = styled.Text`
  font-size: 14px;
  color: ${colors.darkText};
`;

export const RatingIcon = styled(Icon).attrs(() => ({
  size: 14,
  color: colors.warning,
}))``;

export const BuyContainer = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 8px;
  margin: 16px 0;
`;

export const BuyButton = styled.TouchableOpacity``;

export const BuyText = styled.Text`
  color: ${colors.primary};
  font-size: 16px;
`;

export const ReviewsTitle = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ReviewsContainer = styled.View``;

export const ReviewItemContainer = styled.View`
  margin-bottom: 8px;
`;

export const ReviewItemDescription = styled.Text``;
