import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => '/recipes',
      transformResponse: (response) => response.recipes
    }),
    getRecipeDetail: builder.query({
      query: (id) => `/recipes/${id}`
    }),
  }),
});

export const { useGetRecipesQuery, useGetRecipeDetailQuery } = recipesApi;
