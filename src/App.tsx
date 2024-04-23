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

  return (
    <div className="App">
      <div>
        <h2>Todoリスト - その日のメモを登録</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" className="inputText" onChange={(e) => handleChange(e)} />
          <input type="submit" className="submitButton" value="作成" />
        </form>
      </div>
    </div>
  );
}

export default App;