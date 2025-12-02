


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async example
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
  }
);

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = 'Login failed';
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;


