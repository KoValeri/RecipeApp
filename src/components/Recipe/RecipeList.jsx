import RecipeCard from './RecipeCard.jsx';
import './RecipeCards.css'

export default function RecipeList({ recipes, isLoading }) {
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