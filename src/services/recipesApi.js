import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_BASE_URL }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => '/recipes',
      transformResponse: (response) => response.recipes.map(recipe => ({
        ...recipe, isFavorite: false
      }))
    }),
    getRecipeDetail: builder.query({
      query: (id) => `/recipes/${id}`
    }),
  }),
});

export const { useGetRecipesQuery, useGetRecipeDetailQuery } = recipesApi;
