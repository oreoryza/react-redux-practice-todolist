import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { addTodo } from "../redux/todos/action";
import { addTodos, updateTodos } from "../redux/async/todos/action";
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({currentLang, editingTodo, setEditingTodo}) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    } else {
      setText("");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      dispatch(updateTodos(editingTodo.id, { text, completed: editingTodo.completed }));
      setEditingTodo(null); // Reset editingTodo after update
    } else {
      dispatch(addTodos({ id: uuidv4(), text, completed: false }));
    }
    setText("");
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={currentLang === "EN" ? "Add a new task..." : "Tambahkan tugas..."}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button className="btn btn-primary">{currentLang === "EN" ? "Add" : "Tambah"}</button>
      </form>
    </div>
  );
};

export default TodoInput;
