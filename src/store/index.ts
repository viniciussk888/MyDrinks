import {createStore} from 'redux';
import favoriteReducer from './favoriteReducer';
import {persistReducer, persistStore} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: '@mydrinks',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export {store, persistor};
