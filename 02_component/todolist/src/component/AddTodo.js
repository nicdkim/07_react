import React from 'react';

function AddTodo({
  inputText,
  setInputText,
  handleAddTodo,
  colorInput,
  setColorInput,
  handleChangeAllColors,
}) {
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddTodo}>추가</button>

      <input
        type="text"
        value={colorInput}
        onChange={(e) => setColorInput(e.target.value)}
      />
      <button onClick={handleChangeAllColors}>색변경</button>
    </div>
  );
}

export default AddTodo;