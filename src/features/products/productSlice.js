    import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [
      { id: 1, name: "Mobile", price: 20000 },
      { id: 2, name: "Laptop", price: 60000 },
      { id: 3, name: "Headphone", price: 2500 }
    ],
  },
  reducers: {}
});

export default productSlice.reducer;
