import { createSlice } from '@reduxjs/toolkit';

const storedFavs = JSON.parse(localStorage.getItem('favs'));

const initialState = {
    ids: storedFavs ? storedFavs.ids : [],
};

const favsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    toggleRecipe(state, action) {
        const id = action.payload;
        if (!state.ids.includes(id)){
            state.ids.unshift(id);
        } else {
            state.ids = state.ids.filter(favId => favId !== id);
        }
        localStorage.setItem('favs', JSON.stringify({ ids: state.ids }));
    },
    clearFavorites(state) {
        state.ids = [];
    }
  },
});

export const favsActions = favsSlice.actions;

export default favsSlice.reducer;
