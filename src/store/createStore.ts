import {
  createStore,
  applyMiddleware,
  Store,
  Reducer,
  Middleware,
} from 'redux';

export default (reducers: Reducer, middlewares: Middleware[]): Store => {
  const enhancer = applyMiddleware(...middlewares);

  const store = createStore(reducers, enhancer);

  return store;
};
