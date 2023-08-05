import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { marvelApi } from '../services/api';
import characterReducer from '../features/characters/characterSlice';

const rootReducer = combineReducers({
  [marvelApi.reducerPath]: marvelApi.reducer,
  character: characterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marvelApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;

setupListeners(store.dispatch);
