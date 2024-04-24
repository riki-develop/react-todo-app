import React, { useState } from 'react';
import './App.css';
import { useTodos } from './useTodos';
import TodoList from './TodoList';

function App() {
  const [inputValue, setInputValue] = useState("");
  const { todos, addTodo, editTodo, toggleTodo, deleteTodo } = useTodos();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  }

  return (
    <div className="App">
      <div className="innerWrap">
        <h2>TodoList - 一言メモアプリ</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" className="inputText" value={inputValue} onChange={(e) => handleChange(e)} />
          <input type="submit" className="submitButton" value="作成" />
        </form>
        <TodoList todos={todos} onEdit={editTodo} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App;