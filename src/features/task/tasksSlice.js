import { createSlice, nanoid } from "@reduxjs/toolkit";


const tasksSlice = createSlice({
    name: "tasks",
    initialState: {

        items: [],
        filters: 'all'
    },
    reducers: {
        addTask: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (title) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false
                    }
                }
            }
        },

        toggleTask: (state, action) => {
            const task = state.items.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        setFilter: (state, action) => {
            state.filters = action.payload;
        },
        deleteTask: (state, action) => {
            state.items = state.items.filter(task => task.id !== action.payload);
        }   


    }
});
export const { addTask, toggleTask, setFilter , deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;
