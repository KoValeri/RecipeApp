import styles from './RecipeDetails.module.css'
import { useGetRecipesQuery, useGetRecipeDetailQuery } from '@/api/recipesApi.js';
import { useParams } from 'react-router-dom';
import FavRecipeButton from '@/components/FavRecipeButton/FavRecipeButton.jsx';
import { useSelector } from 'react-redux';

export default function RecipeDetails() {
    const { id } = useParams();
    const numbericId = Number(id);
    const { data: recipes = [] } = useGetRecipesQuery();
    const { data: recipe, isLoading } = useGetRecipeDetailQuery(id);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const isFavorite = recipes.find(r => r.id === numbericId)?.isFavorite ?? false;

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.recipeDetail}>
                    <div className={styles.recipeDetailMain}>

                        <div className={styles.recipeDetailImgContainer}>
                            <img className={styles.recipeDetailImg} src={recipe.image} alt={recipe.name} />
                        </div>

                        <div>
                            <h2 className={styles.recipeDetailName}>{recipe.name} 
                                <span className={styles.recipeDetailRating}>★{recipe.rating}</span>
                            </h2>
                            <div>
                                <span className={styles.recipeDetailTitle}>Ingredients:</span>
                                <ul className={styles.recipeDetailIngredients}>
                                    {recipe.ingredients.map(ingredient => (
                                        <li key={ingredient}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>Preparation time: {recipe.prepTimeMinutes} minutes</div>
                            <div>Cooking time: {recipe.cookTimeMinutes} minutes</div>
                            <div>Servings: {recipe.servings}</div>
                            <div>Difficulty: {recipe.difficulty}</div>
                            <div>Cuisine: {recipe.cuisine}</div>
                            <div>Calories: {recipe.caloriesPerServing} kcal per serving</div>
                        </div>

                    </div>

                    <div>
                        <span className={styles.recipeDetailTitle}>Tags: </span>
                        <span>{recipe.tags?.join(", ")}</span>
                    </div>

                    <div>
                         <span className={styles.recipeDetailTitle}>Instruction:</span>
                         <div>{recipe.instructions.join(" ")}</div>
                    </div>

                    <div>
                        {isAuthenticated && <FavRecipeButton className={styles.recipeDetailHeart} id={numbericId} isFavorite={isFavorite}/>}
                    </div>
                </div>
            )}
        </>
    );
}