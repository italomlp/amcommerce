import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppRouter from './routes';

import { persistor, store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppRouter />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
