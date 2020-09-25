import { Product } from '../../../models/Product';

export enum ActionTypes {
  ADD_TO_CART = '@cart/ADD_TO_CART',
  REMOVE_FROM_CART = '@cart/REMOVE_FROM_CART',
}

export type AddToCartAction = {
  type: ActionTypes.ADD_TO_CART;
  payload: {
    product: Product;
  };
};

export type RemoveFromCartAction = {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: {
    id: number;
  };
};

export type CartActionCreators = AddToCartAction | RemoveFromCartAction;
