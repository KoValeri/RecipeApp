import "./HomePage.css";
import RecipeList from "@/components/Recipe/RecipeList";
import { useGetRecipesQuery } from '@/api/recipesApi.js';
import { useSelector } from 'react-redux';
import { filterRecipesBySearch } from "@/utils/searchUtils";

export default function HomePage() {
  const { data: recipes, isLoading } = useGetRecipesQuery();
  const search = useSelector(state => state.search.query);
  const searchedRecipes = filterRecipesBySearch(recipes, search);

  return (
    <>
        <div className="promo-block">
            <h2 className="promo-block__title">Cozy recipes for rainy nights, lazy weekends and laughter-filled dinners.</h2>
            <br />
            <p className="promo-block__subtitle">Every recipe tells a story — let’s cook the ones you’ll want to remember.</p>
        </div>
      {search && searchedRecipes.length === 0 ? (
        <div style={{textAlign: 'center'}}>No recipe found...</div>
        ) : (
          <RecipeList recipes={searchedRecipes} isLoading={isLoading}/>
        )}
    </>
  );
}