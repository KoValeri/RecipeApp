import RecipeCard from './RecipeCard.jsx';
import styles from './RecipeList.module.css';

export default function RecipeList({ recipes, isLoading }) {
  return (
    <>
    {isLoading ? (
        <p>Loading...</p>
    ) : (
        <div className={styles.recipeList}>
            {recipes?.map(recipe => (
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