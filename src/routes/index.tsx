import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../styles';

import Cart from '../pages/Cart';

import ProductsNavigator from './products';

const TabNavigator = createBottomTabNavigator();

const AppRouter: React.FC = () => {
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        labelStyle: {
          paddingBottom: 6,
          fontSize: 12,
        },
        activeTintColor: colors.primary,
        inactiveTintColor: colors.inactive,
      }}
    >
      <TabNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          title: 'Produtos',
          tabBarIcon: props => <Ionicons name="search" {...props} />,
        }}
      />
      <TabNavigator.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Carrinho',
          tabBarIcon: props => <Ionicons name="cart" {...props} />,
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default AppRouter;
