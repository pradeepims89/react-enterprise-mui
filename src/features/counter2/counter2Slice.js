import { createSlice } from "@reduxjs/toolkit";
const counterSlice2 = createSlice({
    name: 'counter2',
    initialState: { value: 0 },
    reducers:
    {
        increment1: (state) => {
            state.value += 1
        },
        decrement1: (state) => {
            state.value -= 1
        },

        reset1: (state) => {
            state.value = 0
        }
    }
})
export const { increment1, decrement1, reset1 } = counterSlice2.actions
export default counterSlice2.reducer;
