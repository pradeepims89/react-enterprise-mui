
const initialState = { isLoggedIn: false, loading: false, user: null, error: null };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };

    case "LOGIN_SUCCESS":
      return { ...state, loading: false, isLoggedIn: true, user: action.payload };

    case "LOGIN_FAILED":
      return { ...state, loading: false, error: action.payload };

    case "LOGOUT":
      return { ...state, isLoggedIn: false, user: null };

    default:
      return state;
  }
}
