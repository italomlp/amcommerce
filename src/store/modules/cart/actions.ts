import { ActionTypes, CartActionCreators } from './types';
import { Product } from '../../../models/Product';

export function addToCart(product: Product): CartActionCreators {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { product },
  };
}

export function removeFromCart(id: number): CartActionCreators {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { id },
  };
}
