import RecipeList from "@/components/Recipe/RecipeList";
import BackButton from "@/components/BackButton/BackButton";
import { useGetRecipesQuery } from '@/api/recipesApi.js';
import { filterRecipesBySearch } from "@/utils/searchUtils";
import { useSearchParams } from "react-router-dom";

export default function FavoritesPage() {
  const { data: recipes = [], isLoading } = useGetRecipesQuery();
  const favsRecipes = recipes.filter(recipe => recipe.isFavorite);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

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