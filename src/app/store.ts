import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { marvelApi } from '../services/api';

const store = configureStore({
  reducer: {
    [marvelApi.reducerPath]: marvelApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marvelApi.middleware),
});

export default store;

setupListeners(store.dispatch);
