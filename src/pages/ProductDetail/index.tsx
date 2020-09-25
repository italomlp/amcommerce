import React, { useCallback, useMemo } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import Carousel from 'react-native-snap-carousel';

import { useDispatch, useSelector } from 'react-redux';
import {
  HeaderContainer,
  BackButton,
  BackButtonIcon,
  Header,
  DescriptionText,
  BuyButton,
  BuyContainer,
  BuyText,
  Image,
  Price,
  PriceContainer,
  Rating,
  RatingIcon,
  TextContainer,
  ReviewItemContainer,
  ReviewItemDescription,
  ReviewsContainer,
  ReviewsTitle,
} from './styles';
import { RouteParams } from '../../models/RouteParams';
import { Image as ImageType } from '../../models/Product';
import { RootReducer } from '../../store/modules/rootReducer';
import { addToCart, removeFromCart } from '../../store/modules/cart/actions';

type CarouselProps = {
  item: ImageType;
  index: number;
};

const COMMENTS_MOCK = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Ótimo produto!',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'John Doe',
    description: 'Ótimo produto!',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'John Doe',
    description: 'Ótimo produto!',
    rating: 4.5,
  },
];

const ProductDetail: React.FC = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<RouteParams, 'ProductDetail'>>();

  const cart = useSelector((state: RootReducer) => state.cart.products);
  const dispatch = useDispatch();

  const toggleInCartProduct = useCallback(() => {
    if (cart.find(prod => prod.id === params.product.id)) {
      dispatch(removeFromCart(params.product.id));
    } else {
      dispatch(addToCart(params.product));
    }
  }, [cart, dispatch, params.product]);

  const inCart = useMemo(() => !!cart.find(p => p.id === params.product.id), [
    cart,
    params.product,
  ]);

  if (!params || !params.product) {
    throw new Error('ProductDetail must have product param');
  }

  const priceWithDiscount = useMemo(() => {
    if (!params.product.discount) {
      return 0;
    }
    return (1 - params.product.discount) * params.product.price;
  }, [params.product]);

  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <HeaderContainer>
          <BackButton onPress={goBack}>
            <BackButtonIcon name="arrow-back" />
          </BackButton>
          <Header title={params.product.title} />
        </HeaderContainer>
        <Carousel
          data={params.product.images}
          renderItem={({ item, index }: CarouselProps) => {
            return <Image source={{ uri: item.uri }} />;
          }}
          sliderWidth={Dimensions.get('window').width}
          itemHeight={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          sliderHeight={Dimensions.get('window').width}
        />
        <TextContainer>
          <DescriptionText>{params.product.description}</DescriptionText>
          <PriceContainer>
            <Price cut={!!priceWithDiscount}>
              R$ {params.product.price.toFixed(2)}
            </Price>
            {!!priceWithDiscount && (
              <Price>R$ {priceWithDiscount.toFixed(2)}</Price>
            )}
          </PriceContainer>
          <Rating>
            <RatingIcon name="star" /> {params.product.rating}
          </Rating>

          <BuyContainer>
            <BuyButton onPress={toggleInCartProduct}>
              <BuyText>
                {inCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
              </BuyText>
            </BuyButton>
            <BuyButton
              onPress={() => {
                if (!inCart) {
                  toggleInCartProduct();
                }
                navigate('Cart');
              }}
            >
              <BuyText>Comprar</BuyText>
            </BuyButton>
          </BuyContainer>

          <ReviewsContainer>
            <ReviewsTitle>Avaliações</ReviewsTitle>
            {COMMENTS_MOCK.map(comment => (
              <ReviewItemContainer>
                <ReviewItemDescription>
                  {comment.description}
                </ReviewItemDescription>
                <Rating>
                  <RatingIcon name="star" /> {comment.rating}
                </Rating>
              </ReviewItemContainer>
            ))}
          </ReviewsContainer>
        </TextContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
