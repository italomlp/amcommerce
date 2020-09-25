import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { Header, ProductsList } from '../../components';
import { RootReducer } from '../../store/modules/rootReducer';

import {
  TotalContainer,
  TotalDescription,
  TotalValue,
  TotalCount,
  TotalValuesContainer,
} from './styles';

const Card: React.FC = () => {
  const products = useSelector((state: RootReducer) => state.cart.products);

  const total = useMemo(() => {
    return products.reduce((acc, current) => {
      return (
        acc +
        (current.discount
          ? (1 - current.discount) * current.price
          : current.price)
      );
    }, 0);
  }, [products]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Carrinho" description="Veja aqui o resumo do seu pedido" />
      <ProductsList
        availableCardActions={['toggle_cart']}
        products={products}
        emptyText="Não há produtos no seu carrinho. Adicione na página de produtos."
      />
      <TotalContainer>
        <TotalDescription>Total:</TotalDescription>
        <TotalValuesContainer>
          <TotalValue>R$ {total.toFixed(2)}</TotalValue>
          <TotalCount>({products.length} itens)</TotalCount>
        </TotalValuesContainer>
      </TotalContainer>
    </SafeAreaView>
  );
};

export default Card;
