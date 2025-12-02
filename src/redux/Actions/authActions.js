// Async login
export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_START" });

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();

      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED", payload: error.message });
    }
  };
};
