import React from 'react';
import { Text, View } from 'react-native';
import { Product } from '../../models/Product';

// import { Container } from './styles';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <View>
      <Text>{product.title}</Text>
    </View>
  );
};

export default ProductCard;
