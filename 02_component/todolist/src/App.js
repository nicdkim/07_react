import React, { useState } from 'react';
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [colorInput, setColorInput] = useState('');
  const [nextId, setNextId] = useState(1);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? 'white' : 'black';
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo = {
        id: nextId,
        text: inputText,
        color: 'black',
        completed: false,
      };
      setTodos([...todos, newTodo]);
      alert(`${inputText} 추가되었습니다`);
      setInputText('');
      setNextId(nextId + 1);
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleChangeAllColors = () => {
    if (colorInput.trim() !== '') {
      setTodos(todos.map((todo) => ({ ...todo, color: colorInput })));
      setColorInput('');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: darkMode ? 'white' : 'black' }}>todolist</h1>

      <button onClick={toggleDarkMode}>다크모드</button>

      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        handleDeleteTodo={handleDeleteTodo}
      />

      <AddTodo
        inputText={inputText}
        setInputText={setInputText}
        handleAddTodo={handleAddTodo}
        colorInput={colorInput}
        setColorInput={setColorInput}
        handleChangeAllColors={handleChangeAllColors}
      />
    </div>
  );
}

export default App;