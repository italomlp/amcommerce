import React, { useMemo } from 'react';
import { FlatListProps } from 'react-native';

import { Product } from '../../models/Product';

import ProductCard from '../ProductCard';

import { StyledFlatList, EmptyContainer, EmptyText } from './styles';

type ProductWithInCartFlag = Product & {
  inCart: boolean;
};

type Props = {
  products: Product[];
  topComponent?: React.ReactElement;
  emptyText?: string;
} & Omit<
  Partial<FlatListProps<ProductWithInCartFlag>>,
  | 'data'
  | 'ListEmptyComponent'
  | 'ListHeaderComponent'
  | 'keyExtractor'
  | 'renderItem'
>;

const MoviesList: React.FC<Props> = ({
  products,
  topComponent: TopComponent,
  emptyText,
  ...rest
}) => {
  const productsWithInCartPopulated = useMemo(
    () =>
      products.map(product => ({
        ...product,
        inCart: false, // TODO: populate properly
      })),
    [products],
  );

  return (
    <StyledFlatList
      data={productsWithInCartPopulated}
      ListEmptyComponent={
        emptyText ? (
          <EmptyContainer>
            <EmptyText>{emptyText}</EmptyText>
          </EmptyContainer>
        ) : undefined
      }
      ListHeaderComponent={TopComponent}
      keyExtractor={product => String(product.id)}
      renderItem={({ item: product }) => (
        <ProductCard product={product} inCart={product.inCart} />
      )}
      {...rest}
    />
  );
};

export default MoviesList;
