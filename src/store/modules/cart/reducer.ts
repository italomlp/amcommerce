import produce from 'immer';

import { CartActionCreators, ActionTypes } from './types';
import { Product } from '../../../models/Product';

export type StateType = {
  readonly products: Product[];
};

const INITIAL_STATE: StateType = {
  products: [],
};

export default function loading(
  state = INITIAL_STATE,
  action: CartActionCreators,
): StateType {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.ADD_TO_CART: {
        const productToAdd = action.payload.product;
        if (!draft.products.find(product => product.id === productToAdd.id)) {
          draft.products.push(productToAdd);
        }
        return draft;
      }
      case ActionTypes.REMOVE_FROM_CART: {
        const { id } = action.payload;
        const productIndex = draft.products.findIndex(
          product => product.id === id,
        );
        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
        return draft;
      }
      default:
        return draft;
    }
  });
}
