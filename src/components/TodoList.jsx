import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../redux/todos/action";

const TodoList = ({currentLang}) => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => dispatch(completeTodo(todo.id))}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            {currentLang === "EN" ? "Delete" : "Hapus"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
