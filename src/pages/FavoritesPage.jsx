import RecipeList from "@/components/Recipe/RecipeList";
import BackButton from "@/components/BackButton/BackButton";
import { useGetRecipesQuery } from '@/api/recipesApi.js';
import { useSelector } from 'react-redux';
import { filterRecipesBySearch } from "@/utils/searchUtils";

export default function FavoritesPage() {
  const { data: recipes = [], isLoading } = useGetRecipesQuery();
  const favsRecipes = recipes.filter(recipe => recipe.isFavorite);
  const search = useSelector(state => state.search.query);
  const searchedRecipes = filterRecipesBySearch(favsRecipes, search);

  return (
    <>
      <BackButton />
      {searchedRecipes.length > 0 ? (
        <RecipeList recipes={searchedRecipes} isLoading={isLoading}/>
      ) : (
        <div>Your favorite recipes are coming soon...</div>
      )}
    </>
  );
}