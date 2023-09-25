import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    name: '',
    email: '',
    accessToken: '',
    isAuthenticated: false
  },
  reducers: {
    login: (state, action) => {
        state.isAuthenticated = true;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = null; // Clear user data when logging out
      },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
