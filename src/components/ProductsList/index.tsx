import React, { useCallback, useMemo } from 'react';
import { FlatListProps } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../../models/Product';

import { RootReducer } from '../../store/modules/rootReducer';
import { addToCart, removeFromCart } from '../../store/modules/cart/actions';

import ProductCard from '../ProductCard';

import { StyledFlatList, EmptyContainer, EmptyText } from './styles';

type ProductWithInCartFlag = Product & {
  inCart: boolean;
};

type AvailableCardActionType = 'buy' | 'toggle_cart';

type Props = {
  products: Product[];
  topComponent?: React.ReactElement;
  emptyText?: string;
  availableCardActions?: AvailableCardActionType[];
} & Omit<
  Partial<FlatListProps<ProductWithInCartFlag>>,
  | 'data'
  | 'ListEmptyComponent'
  | 'ListHeaderComponent'
  | 'keyExtractor'
  | 'renderItem'
>;

const ProductsList: React.FC<Props> = ({
  products,
  topComponent: TopComponent,
  emptyText,
  availableCardActions,
  ...rest
}) => {
  const cart = useSelector((state: RootReducer) => state.cart.products);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const toggleInCartProduct = useCallback(
    (product: Product) => {
      if (cart.find(prod => prod.id === product.id)) {
        dispatch(removeFromCart(product.id));
      } else {
        dispatch(addToCart(product));
      }
    },
    [cart, dispatch],
  );

  const productsWithInCartPopulated = useMemo(
    () =>
      products.map(product => ({
        ...product,
        inCart: !!cart.find(p => p.id === product.id),
      })),
    [products, cart],
  );

  const getProductCardActions = useCallback(
    (product: ProductWithInCartFlag) => {
      const actions = [
        {
          key: 'toggle_cart',
          buttonTitle: product.inCart
            ? 'Remover do carrinho'
            : 'Adicionar ao carrinho',
          action: toggleInCartProduct,
        },
        {
          key: 'buy',
          buttonTitle: 'Comprar',
          action: () => {
            if (!product.inCart) {
              toggleInCartProduct(product);
            }
            navigate('Cart');
          },
        },
      ];
      if (availableCardActions) {
        return actions.filter(act =>
          availableCardActions.includes(act.key as AvailableCardActionType),
        );
      }

      return actions;
    },
    [toggleInCartProduct, navigate, availableCardActions],
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
        <ProductCard
          product={product}
          inCart={product.inCart}
          bottomActions={getProductCardActions(product)}
        />
      )}
      {...rest}
    />
  );
};

export default ProductsList;
