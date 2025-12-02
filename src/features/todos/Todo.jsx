import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./todoSlice";

export default function Todo() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo App</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter task" />
      <button onClick={() => { dispatch(addTodo(text)); setText(""); }}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(todo.id))}> ✔ </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}> ✖ </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
