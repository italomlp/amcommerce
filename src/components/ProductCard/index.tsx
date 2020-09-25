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

type Props = {
  product: Product;
  inCart?: boolean;
};

const ProductCard: React.FC<Props> = ({ product, inCart }) => {
  const priceWithDiscount = useMemo(() => {
    if (!product.discount) {
      return 0;
    }
    return (1 - product.discount) * product.price;
  }, []);

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
        <BuyButton>
          <BuyText>
            {inCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
          </BuyText>
        </BuyButton>
        <BuyButton>
          <BuyText>Comprar</BuyText>
        </BuyButton>
      </BuyContainer>
    </Container>
  );
};

export default ProductCard;
