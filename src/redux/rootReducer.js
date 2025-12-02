import { combineReducers } from "redux";
import counterReducer from "./store/Counter";
import authReducer from "./store/authReducer";

 const rootReducer = combineReducers({
    // Add your reducers here
    counter: counterReducer,
    auth:authReducer

}); 
export default rootReducer; 


