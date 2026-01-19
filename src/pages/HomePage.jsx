import PromoBlock from "@/components/PromoBlock/PromoBlock";
import RecipeList from "@/components/Recipe/RecipeList";
import { useGetRecipesQuery } from '@/services/recipesApi.js';

export default function HomePage() {
   const { data: recipes, isLoading } = useGetRecipesQuery();

  return (
    <>
      <PromoBlock />
      <RecipeList recipes={recipes} isLoading={isLoading}/>
    </>
  );
}