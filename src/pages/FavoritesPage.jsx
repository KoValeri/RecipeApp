import RecipeList from "@/components/Recipe/RecipeList";
import BackButton from "../components/BackButton/BackButton";
import { useGetRecipesQuery } from '@/services/recipesApi.js';

export default function FavoritesPage() {
  const { data: recipes = [], isLoading } = useGetRecipesQuery();
  const favsRecipes = recipes.filter(recipe => recipe.isFavorite);

  return (
    <>
      <BackButton />
      {favsRecipes.length ? (
        <RecipeList recipes={favsRecipes} isLoading={isLoading}/>
        
      ) : (
        <div>Your favorite recipes are coming soon...</div>
      )}
    </>
  );
}