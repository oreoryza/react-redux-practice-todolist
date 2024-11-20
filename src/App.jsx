import React, {useState} from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

const App = () => {
  const [editingTodo, setEditingTodo] = useState(null);
  const currentLang = useSelector((state) => state.language.lang);
  return (
    <div className="container mt-5">
      <Navbar currentLang={currentLang}/>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">{currentLang === "EN" ? "Todo List" : "Daftar Todo" }</h1>
              <TodoInput currentLang={currentLang} editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
              <TodoList currentLang={currentLang} setEditingTodo={setEditingTodo} />
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default App;
