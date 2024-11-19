// src/components/TodoInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/action";

const TodoInput = ({currentLang}) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id:Date.now(), text: text, completed: false }));
    setText("");
  }

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
