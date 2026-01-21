import hollowHeart from "@/assets/icons/hollowHeart.png"
import fullHeart from "@/assets/icons/fullHeart.png"
import { useDispatch, useSelector } from 'react-redux';
import { favsActions } from '@/store/favsSlice';
import './FavRecipeButton.css'

export default function FavRecipeButton({ id, className }) {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.favs.ids.includes(id));

    function handleFavs(e){
        e.stopPropagation();
        dispatch(favsActions.toggleRecipe(id));
    }

    return(
        <img className={`${className}`} src={isFavorite ? fullHeart : hollowHeart} alt="heart" onClick={handleFavs}/>
    );
}