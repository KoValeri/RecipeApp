import { useNavigate, generatePath } from 'react-router-dom';
import './RecipeCards.css'
import { ROUTES } from "@/configs/routesConfig";
import heartIcon from "@/icons/heart.svg"

export default function RecipeCard({id, name, image, rating, difficulty, prepTimeMinutes, cookTimeMinutes, tags}) {
  const navigate = useNavigate();
  
  function handleClick(){
    navigate( generatePath(ROUTES.RECIPE, {id}) );
  }
  
  return (
    <div className='recipe-card'>
        <img className='recipe-card__image' src={image} alt={name} onClick={handleClick}/>
        <div className='recipe-card__info'>
            <p className='recipe-card__title'>{name}</p>
            <div className="recipe-card__meta">
                <span className="recipe-card__rating">★ {rating}</span>
                <span className="recipe-card__difficulty">{difficulty}</span>
            </div>
            <div>Cooking time: {prepTimeMinutes + cookTimeMinutes} minutes</div>
            <div className='recipe-card__tags'>{tags?.join(", ")}</div>
            <div className='recipe-card__heart-conteiner'>
              <div>
                  <img className='recipe-card__heart' src={heartIcon} alt="heart" />
              </div>
            </div>
        </div>
    </div>
  );
}