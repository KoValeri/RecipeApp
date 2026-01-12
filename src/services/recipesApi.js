import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getRecipesSmall: builder.query({
      query: () => '/recipes',
      transformResponse: (response) =>
        response.recipes.map(recipe => ({
          id: recipe.id,
          name: recipe.name,
          image: recipe.image,
          rating: recipe.rating,
          difficulty: recipe.difficulty,
          prepTimeMinutes: recipe.prepTimeMinutes,
          cookTimeMinutes: recipe.cookTimeMinutes,
          tags: recipe.tags,
        })),
    }),
    getRecipeDetail: builder.query({
      query: (id) => `/recipes/${id}`,
      transformResponse: (recipe) => ({
        id: recipe.id,
        name: recipe.name,
        image: recipe.image,
        rating: recipe.rating,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        prepTimeMinutes: recipe.prepTimeMinutes,
        cookTimeMinutes: recipe.cookTimeMinutes,
        servings: recipe.servings,
        difficulty: recipe.difficulty,
        cuisine: recipe.cuisine,
        caloriesPerServing: recipe.caloriesPerServing,
        tags: recipe.tags,
      }),
    }),
  }),
});

export const { useGetRecipesSmallQuery, useGetRecipeDetailQuery } = recipesApi;
