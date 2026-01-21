import RecipeList from "@/components/Recipe/RecipeList";
import BackButton from "../components/BackButton/BackButton";
import { useGetRecipesQuery } from '@/services/recipesApi.js';
import { useSelector } from 'react-redux';

export default function FavoritesPage() {
  const favsIds = useSelector(state => state.favs.ids);
  const { data: recipes = [], isLoading } = useGetRecipesQuery();
  const favsRecipes = recipes.filter(recipe => favsIds.includes(recipe.id));

  return (
    <>
      <BackButton />
      {favsIds.length ? (
        <RecipeList recipes={favsRecipes} isLoading={isLoading}/>
        
      ) : (
        <div>Your favorite recipes are coming soon...</div>
      )}
    </>
  );
}