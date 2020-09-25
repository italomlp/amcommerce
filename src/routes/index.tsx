import React from 'react';
import { Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigator = createBottomTabNavigator();

const AppRouter: React.FC = () => {
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        labelStyle: {
          paddingBottom: 6,
          fontSize: 12,
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <TabNavigator.Screen
        name="Products"
        component={() => <Text>Products</Text>}
        options={{
          title: 'Produtos',
          tabBarIcon: props => <Ionicons name="search" {...props} />,
        }}
      />
      <TabNavigator.Screen
        name="Cart"
        component={() => <Text>Cart</Text>}
        options={{
          title: 'Carrinho',
          tabBarIcon: props => <Ionicons name="cart" {...props} />,
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default AppRouter;
