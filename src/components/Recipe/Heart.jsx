import heartIcon from "@/icons/heart.svg"
import { useDispatch, useSelector } from 'react-redux';
import { favsActions } from '@/store/favsSlice';

export default function Heart({ id, className }) {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.favs.ids.includes(id));

    function handleFavs(){
        dispatch(favsActions.toggleRecipe(id));
    }

    return(
        <img className={`${className} ${ isFavorite ? "favorite" : "" }`} src={heartIcon} alt="heart" onClick={handleFavs}/>
    );
}