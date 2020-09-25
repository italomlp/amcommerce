import { Middleware } from 'redux';
import { persistStore } from 'redux-persist';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';

const middlewares: Middleware[] = [];

const store = createStore(
  persistReducers('@amcommerce', rootReducer, []),
  middlewares,
);

const persistor = persistStore(store);

export { store, persistor };
