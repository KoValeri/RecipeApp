import "./HomePage.css";
import RecipeList from "@/components/Recipe/RecipeList";
import { useGetRecipesQuery } from '@/services/recipesApi.js';

export default function HomePage() {
   const { data: recipes, isLoading } = useGetRecipesQuery();

  return (
    <>
        <div className="promo-block">
            <h2 className="promo-block__title">Cozy recipes for rainy nights, lazy weekends and laughter-filled dinners.</h2>
            <br />
            <p className="promo-block__subtitle">Every recipe tells a story — let’s cook the ones you’ll want to remember.</p>
        </div>
      <RecipeList recipes={recipes} isLoading={isLoading}/>
    </>
  );
}