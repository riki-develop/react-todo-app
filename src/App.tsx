import React, { useState } from 'react'; // useStateをインポートしておく事を忘れずに
import './App.css';
import { log } from 'console';

function App() {
  /**
   * ※React hocks: Stateを定義
   * 【useState<Todo[]>([])】　←　型定義（初期値は空 | Todoで定義した型のみ許可）
  */
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Todoを作成（型定義）
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 新しいTodoを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    }

    setTodos([newTodo, ...todos]); // 既存のTodoに新たにTodoが追加されていくイメージ
    setInputValue(''); // 最後にインプットバリューを空に戻す
  }

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo; // newTodosが初期値「空」のためtodosとマッチしないので更新後returnで返す必要がある
    })

    setTodos(newTodos);
  }

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.checked = !checked;
      }
      return todo; // newTodosが初期値「空」のためtodosとマッチしないので更新後returnで返す必要がある
    })

    setTodos(newTodos);
  }

  const handleDelete = (id: number) => {
    const newTodos =todos.filter((todo) => todo.id !== id)
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="innerWrap">
        <h2>TodoList - MemoApp</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" className="inputText" onChange={(e) => handleChange(e)} />
          <input type="submit" className="submitButton" value="作成" />
        </form>
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type="text" className="inputText" onChange={(e) => handleEdit(todo.id, e.target.value)} value={todo.inputValue} disabled={todo.checked} />
              <input type="checkbox" onChange={(e) => handleChecked(todo.id, todo.checked)} />

              <button onClick={() => handleDelete(todo.id)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;