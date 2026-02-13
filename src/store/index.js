import { configureStore } from '@reduxjs/toolkit';
import { recipesApi } from '@/api/recipesApi';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});
