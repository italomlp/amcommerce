import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Header, ProductsList } from '../../components';
import { RootReducer } from '../../store/modules/rootReducer';

// import { Container } from './styles';

const Card: React.FC = () => {
  const products = useSelector((state: RootReducer) => state.cart.products);

  return (
    <SafeAreaView>
      <Header title="Carrinho" description="Veja aqui o resumo do seu pedido" />
      <ProductsList
        availableCardActions={['toggle_cart']}
        products={products}
        emptyText="Não há produtos no seu carrinho. Adicione na página de produtos."
      />
    </SafeAreaView>
  );
};

export default Card;
