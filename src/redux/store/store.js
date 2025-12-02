import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import  rootReducer  from "../rootReducer";

// Load state from localStorage
const loadState = () => {
  try {
    const stored = localStorage.getItem("reduxState");
    if (!stored) return undefined;
    return JSON.parse(stored);
  } catch {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    localStorage.setItem("reduxState", JSON.stringify(state));
  } catch {}
};

const persistedState = loadState();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

// Save state anytime store updates
store.subscribe(() => {
  saveState(store.getState());
});
