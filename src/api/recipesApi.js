import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URLS } from './configs/url.configs';

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_BASE_URL }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => API_URLS.RECIPES,
      transformResponse: (response) => response.recipes.map(recipe => ({
        ...recipe, isFavorite: false
      }))
    }),
    getRecipeDetail: builder.query({
      query: (id) => API_URLS.RECIPE_BY_ID(id),
    }),
  }),
});

export const { useGetRecipesQuery, useGetRecipeDetailQuery } = recipesApi;
