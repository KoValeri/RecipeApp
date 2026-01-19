import { configureStore } from '@reduxjs/toolkit';
import { recipesApi } from '@/services/recipesApi';
import authReducer from './authSlice';
import favsReducer from './favsSlice';

export const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer,
    auth: authReducer,
    favs: favsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});
