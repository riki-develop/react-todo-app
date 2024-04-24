import { useState } from 'react';

// Todoを作成（型定義）
export type Todo = {
  inputValue: string;
  id: number;
  checked: boolean;
  timestamp: Date;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (inputValue: string) => {
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
      timestamp: new Date(),
    }
    setTodos([newTodo, ...todos]);
  }

  const editTodo = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const toggleTodo = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const deleteTodo = (id: number) => {
    const newTodos =todos.filter((todo) => todo.id !== id)
    setTodos(newTodos);
  }

  return { todos, addTodo, editTodo, toggleTodo, deleteTodo };
}