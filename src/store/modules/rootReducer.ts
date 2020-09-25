import { combineReducers } from 'redux';

export type RootReducer = {
  example: null;
};

export default combineReducers<RootReducer>({
  example: () => null,
});
