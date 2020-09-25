import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';

const StackNavigator = createStackNavigator();

const ProductsRouter: React.FC = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Products"
        component={Products}
        options={{
          header: () => null,
        }}
      />
      <StackNavigator.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          header: () => null,
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default ProductsRouter;
