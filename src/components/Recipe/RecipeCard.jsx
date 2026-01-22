import { useNavigate, generatePath } from 'react-router-dom';
import './RecipeCards.css'
import { ROUTES } from "@/configs/routesConfig";
import FavRecipeButton from '@/components/FavRecipeButton/FavRecipeButton';
import { useSelector } from 'react-redux';

export default function RecipeCard({id, name, image, rating, difficulty, prepTimeMinutes, cookTimeMinutes, tags, isFavorite}) {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
  function handleClick(){
    navigate( generatePath(ROUTES.RECIPE, {id}) );
  }
  
  return (
    <div className='recipe-card' onClick={handleClick}>
        <img className='recipe-card__image' src={image} alt={name}/>
        <div className='recipe-card__info'>
            <p className='recipe-card__title'>{name}</p>
            <div className="recipe-card__meta">
                <span className="recipe-card__rating">★ {rating}</span>
                <span className="recipe-card__difficulty">{difficulty}</span>
            </div>
            <div>Cooking time: {prepTimeMinutes + cookTimeMinutes} minutes</div>
            <div className='recipe-card__tags'>{tags?.join(", ")}</div>
            <div className='recipe-card__heart-conteiner'>
              {isAuthenticated && <FavRecipeButton className="recipe-card__heart" id={id} isFavorite={isFavorite}/>}
            </div>
        </div>
    </div>
  );
}