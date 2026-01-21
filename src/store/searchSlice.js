import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { query: '' },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
