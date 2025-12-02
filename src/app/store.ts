import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import countersReducer from '../features/counters/counterSlice'
import todoReducer from '../features/todo/todoSlice'
import authReducer from '../features/auth/authSlice'
import tasksSlice from '../features/task/tasksSlice'
import counter2Slice from '../features/counter2/counter2Slice'
import todoSlice from '../features/todos/todoSlice'
import cardSlice from '../features/cart/cartSlice'
import productSlice from '../features/products/productSlice'

// Simple localStorage persist for auth only
const AUTH_KEY = 'myapp_auth_v1'
const loadAuth = () => {
try {
const raw = localStorage.getItem(AUTH_KEY)
return raw ? { auth: JSON.parse(raw) } : undefined
} catch (e) {
return undefined
}
}
const saveAuth = (state) => {
try {
const toSave = state.auth
localStorage.setItem(AUTH_KEY, JSON.stringify(toSave))
} catch (e) {
console.warn('Failed to save auth', e)
}
}
export const store = configureStore({
  reducer: {
    users: usersReducer,
    counter:countersReducer,
    counter2:counter2Slice,
    todos: todoReducer,
    auth:authReducer,
    tasks:tasksSlice,
    todo:todoSlice,
    cart:cardSlice,
    products:productSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
