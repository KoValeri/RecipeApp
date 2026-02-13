import { useNavigate, generatePath } from 'react-router-dom';
import styles from './RecipeCard.module.css'
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
    <div className={styles.recipeCard} onClick={handleClick}>
        <img className={styles.recipeCardImage} src={image} alt={name}/>
        <div className={styles.recipeCardInfo}>
            <p className={styles.recipeCardTitle}>{name}</p>
            <div className={styles.recipeCardMeta}>
                <span className={styles.recipeCardRating}>★ {rating}</span>
                <span>{difficulty}</span>
            </div>
            <div>Cooking time: {prepTimeMinutes + cookTimeMinutes} minutes</div>
            <div className={styles.recipeCardTags}>{tags?.join(", ")}</div>
            <div className={styles.recipeCardHeartConteiner}>
              {isAuthenticated && <FavRecipeButton className={styles.recipeCardHeart} id={id} isFavorite={isFavorite}/>}
            </div>
        </div>
    </div>
  );
}