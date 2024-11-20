import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { deleteTodo, completeTodo } from "../redux/todos/action";
import { fetchTodos, deleteTodos, completeTodo } from "../redux/async/todos/action";

const TodoList = ({ currentLang, setEditingTodo }) => {
  // const todos = useSelector((state) => state.todo.todos);
  const { todos, loading, error, isSuccess } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchTodos());
    }
  }, [isSuccess]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isSuccess) {
    return 
  }

  if (!todos || todos.length === 0) {
    return (
      <div>{currentLang === "EN" ? "No todos found." : "Tidak ada tugas."}</div>
    );
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            onClick={() => dispatch(completeTodo(todo.id))}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          <div className="btn-group">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(deleteTodos(todo.id))}
          >
            {currentLang === "EN" ? "Delete" : "Hapus"}
          </button>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => setEditingTodo(todo)}
          >
            {currentLang === "EN" ? "Edit" : "Ubah"}
          </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
