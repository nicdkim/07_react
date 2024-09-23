import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, handleDeleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;