import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>영화를 찾을 수 없습니다.</p>; 
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>연도: {movie.year}</p>
      <p>설명: {movie.description}</p>
      <button onClick={() => navigate(-1)}>돌아가기</button>
    </div>
  );
}

export default MovieDetail;