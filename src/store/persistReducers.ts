import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { Reducer } from 'redux';

export default (
  key: string,
  reducers: Reducer,
  whitelist: string[] = [],
  blacklist?: string[],
): Reducer => {
  const persistedReducer = persistReducer(
    {
      key,
      storage: AsyncStorage,
      whitelist,
      blacklist,
    },
    reducers,
  );
  return persistedReducer;
};
