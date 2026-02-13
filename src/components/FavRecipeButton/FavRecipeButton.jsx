import hollowHeart from "@/assets/icons/hollowHeart.png"
import fullHeart from "@/assets/icons/fullHeart.png"
import { useDispatch } from 'react-redux';
import styles from './FavRecipeButton.module.css'
import { recipesApi } from "@/api/recipesApi";

export default function FavRecipeButton({ id, className, isFavorite }) {
    const dispatch = useDispatch();

    function handleFavs(e){
        e.stopPropagation();
        dispatch(recipesApi.util.updateQueryData(
            'getRecipes',
            undefined,
            (draft) => {
                const recipe = draft.find(rec => rec.id === id);
                if (recipe) {
                    recipe.isFavorite = !recipe.isFavorite;
                }
            }
        ));
    }

    return(
        <img className={`${styles.favButton} ${className || ''}`} src={isFavorite ? fullHeart : hollowHeart} alt="heart" onClick={handleFavs}/>
    );
}