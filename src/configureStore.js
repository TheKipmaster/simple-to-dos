import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers'; // the value from combineReducers

const persistConfig = {
  timeout: 20000,
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
