import React from 'react';
import { Todo } from './useTodos';

type TodoListProps = {
  todos: Todo[];
  onEdit: (id: number, inputValue: string) => void;
  onToggle: (id: number, checked: boolean) => void;
  onDelete: (id: number) => void;
}

function formatTimestamp(timestamp: Date): string {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();
  const hour = timestamp.getHours();
  const minute = timestamp.getMinutes();

  return `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onEdit, onToggle, onDelete }) => (
  <ul className="todoList">
    {todos.map((todo) => (
      <li key={todo.id}>
        <div className="inputTextWrap">
          <input type="text" className="inputText" onChange={(e) => onEdit(todo.id, e.target.value)} value={todo.inputValue} disabled={todo.checked} />
          <p className="timeStamp">{formatTimestamp(todo.timestamp)}</p>
        </div>
        <div className="inputBtnWrap">
        <input type="checkbox" onChange={(e) => onToggle(todo.id, todo.checked)} />
        <button onClick={() => onDelete(todo.id)}>削</button>
        </div>
      </li>
    ))}
  </ul>
);

export default TodoList;