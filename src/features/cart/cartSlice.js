import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { list: [], total: 0 },
  reducers: {
    addToCart: (state, action) => {
      state.list.push(action.payload);
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const item = state.list.find(i => i.id === action.payload);
      state.total -= item.price;
      state.list = state.list.filter(i => i.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
