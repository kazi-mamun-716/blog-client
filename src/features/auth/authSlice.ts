import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  isLoggedIn?: boolean;
  token?: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkLogin: (state, action) => {
        state.token = action.payload;
        state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { checkLogin, logout } = authSlice.actions

export default authSlice.reducer