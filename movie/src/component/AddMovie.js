import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddMovie({ addMovie }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMovie = { 
      title, 
      year: parseInt(year), 
      description 
    };

    addMovie(newMovie);

    navigate('/movies');
  };

  return (
    <div>
      <h2>영화 추가하기</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>연도: </label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label>설명: </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
}

export default AddMovie;