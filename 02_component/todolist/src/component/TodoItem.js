import React from 'react';

function TodoItem({ todo, toggleComplete, handleDeleteTodo }) {
  return (
    <div
      style={{
        color: todo.color,
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {todo.text}
      <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
    </div>
  );
}

export default TodoItem;