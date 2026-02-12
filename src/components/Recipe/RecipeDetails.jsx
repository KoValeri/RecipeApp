import './RecipeDetails.css';
import { useGetRecipesQuery, useGetRecipeDetailQuery } from '@/api/recipesApi.js';
import { useParams } from 'react-router-dom';
import FavRecipeButton from '@/components/FavRecipeButton/FavRecipeButton.jsx';
import { useSelector } from 'react-redux';

export default function RecipeCard() {
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
                <div className='recipe-detail'>
                    <div className='recipe-detail__main'>

                        <div className='recipe-detail__img-container'>
                            <img className='recipe-detail__img' src={recipe.image} alt={recipe.name} />
                        </div>

                        <div>
                            <h2 className='recipe-detail__name'>{recipe.name} 
                                <span className='recipe-detail__rating'>★{recipe.rating}</span>
                            </h2>
                            <div>
                                <span className='recipe-detail__title'>Ingredients:</span>
                                <ul className='recipe-detail__ingredients'>
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
                        <span className='recipe-detail__title'>Tags: </span>
                        <span>{recipe.tags?.join(", ")}</span>
                    </div>

                    <div>
                         <span className='recipe-detail__title'>Instruction:</span>
                         <div>{recipe.instructions.join(" ")}</div>
                    </div>

                    <div>
                        {isAuthenticated && <FavRecipeButton className="recipe-detail__heart" id={numbericId} isFavorite={isFavorite}/>}
                    </div>
                </div>
            )}
        </>
    );
}