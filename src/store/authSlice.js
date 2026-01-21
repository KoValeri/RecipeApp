import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: storedUser ? { email: storedUser.email, password: storedUser.password } : null,
  isAuthenticated: storedUser ? storedUser.isAuthenticated : false,
  loginError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, action) {
        state.user = action.payload;
        state.isAuthenticated = false;
        state.loginError = false;

        localStorage.setItem('user', JSON.stringify({ ...action.payload, isAuthenticated: false }));
    },
    login(state, action) {
        const {email, password} = action.payload;

        if (state.user && email === state.user.email && password === state.user.password){
          state.isAuthenticated = true;
          localStorage.setItem('user', JSON.stringify({ ...state.user, isAuthenticated: true }));
          state.loginError = false;
        } else {
            state.loginError = true
        }
    },
    logout(state) {
        state.user = null;
        state.loginError = false;
        state.isAuthenticated = false;
        localStorage.removeItem('user');
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
