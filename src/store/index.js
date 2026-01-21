import { configureStore } from '@reduxjs/toolkit';
import { recipesApi } from '@/services/recipesApi';
import authReducer from './authSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer,
    auth: authReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});
