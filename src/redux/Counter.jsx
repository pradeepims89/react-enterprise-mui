import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/Actions/authActions";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.auth.user);


   const loading = useSelector((state) => state.auth.loading);

  const handleLogin = () => {
    dispatch(loginUser());
  };
  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>

      <hr />

      <h2>Auth</h2>
      <button onClick={() => dispatch(loginUser())}>Login (API)</button>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}


      <div>
      <button onClick={handleLogin}>Login</button>

      {loading && <div className="spinner"></div>}

      {user && <h3>Welcome {user.name}</h3>}
    </div>
    </>
  );
}
