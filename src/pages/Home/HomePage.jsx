import "./HomePage.css";
import RecipeList from "@/components/Recipe/RecipeList";
import { useGetRecipesQuery } from '@/api/recipesApi.js';
import { filterRecipesBySearch } from "@/utils/searchUtils";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  const { data: recipes, isLoading } = useGetRecipesQuery();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  
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