import 'react-native-gesture-handler';

import React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Text>Hello world!</Text>
    </NavigationContainer>
  );
};

export default App;
