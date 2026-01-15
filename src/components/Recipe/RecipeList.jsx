import RecipeCard from './RecipeCard.jsx';
import './RecipeCards.css'
import { useGetRecipesQuery } from '../../services/recipesApi.js';

export default function RecipeList() {
 const { data: recipes, isLoading } = useGetRecipesQuery();

  return (
    <>
    {isLoading ? (
        <p>Loading...</p>
    ) : (
        <div className='recipe-list__cards'>
            {recipes.map(recipe => (
                <RecipeCard 
                key={recipe.id}
                id={recipe.id} 
                {...recipe} />
            ))}
        </div>
    )}
    </>
  );
}