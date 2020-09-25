import { combineReducers } from 'redux';

import cart, { StateType as CartState } from './cart/reducer';

export type RootReducer = {
  cart: CartState;
};

export default combineReducers<RootReducer>({
  cart,
});
