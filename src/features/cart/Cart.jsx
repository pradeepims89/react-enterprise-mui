import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

export default function Cart() {
  const { list, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {list.map(i => (
        <div key={i.id}>
          {i.name} - ₹{i.price}
          <button onClick={() => dispatch(removeFromCart(i.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}
