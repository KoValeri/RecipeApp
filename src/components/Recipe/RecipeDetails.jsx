import './RecipeCards.css'
import { useGetRecipeDetailQuery } from '../../services/recipesApi.js';
import { useParams } from 'react-router-dom';

export default function RecipeCard() {
    const { id } = useParams();
    const { data: recipe, isLoading } = useGetRecipeDetailQuery(id);

    return (
        <div className='recipe-card'>
            <img className='recipe-card__image' />
            <div className='recipe-card__info'>
                <p className='recipe-card__title'>{}</p>
                <div className="recipe-card__meta">
                    <span className="recipe-card__rating">★ {}</span>
                    <span className="recipe-card__difficulty">{}</span>
                </div>
                <div>Cooking time: {} </div>
                <div className='recipe-card__tags'>{}</div>
            </div>
        </div>
    );
}