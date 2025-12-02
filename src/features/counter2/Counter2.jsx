import { useSelector, useDispatch } from "react-redux";
import { increment1, decrement1, reset1 } from "./counter2Slice";

export default function Counter2() {
  const count = useSelector((state) => state.counter2.value);

  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment1())}> + </button>
      <button onClick={() => dispatch(decrement1())}> - </button>
      <button onClick={() => dispatch(reset1())}> Reset </button>
    </div>
  );
}
