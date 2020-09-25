import React, { useMemo } from 'react';
import { Product } from '../../models/Product';

import {
  Container,
  TextContainer,
  Title,
  Image,
  ImageContainer,
  Rating,
  RatingIcon,
  BuyButton,
  BuyContainer,
  BuyText,
  Price,
  PriceContainer,
} from './styles';

type ButtonAction = {
  key: string;
  buttonTitle: string;
  action: (_: Product) => unknown;
};

type Props = {
  product: Product;
  inCart?: boolean;
  bottomActions?: ButtonAction[];
};

const ProductCard: React.FC<Props> = ({ product, inCart, bottomActions }) => {
  const priceWithDiscount = useMemo(() => {
    if (!product.discount) {
      return 0;
    }
    return (1 - product.discount) * product.price;
  }, [product]);

  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: product.images[0].uri }} />
      </ImageContainer>
      <TextContainer>
        <Title>{product.title}</Title>
        <Rating>
          <RatingIcon name="star" /> {product.rating}
        </Rating>
        <PriceContainer>
          <Price cut={!!priceWithDiscount}>R$ {product.price.toFixed(2)}</Price>
          {!!priceWithDiscount && (
            <Price>R$ {priceWithDiscount.toFixed(2)}</Price>
          )}
        </PriceContainer>
      </TextContainer>
      <BuyContainer>
        {bottomActions &&
          bottomActions.map(act => (
            <BuyButton key={act.key} onPress={() => act.action(product)}>
              <BuyText>{act.buttonTitle}</BuyText>
            </BuyButton>
          ))}
      </BuyContainer>
    </Container>
  );
};

export default ProductCard;
