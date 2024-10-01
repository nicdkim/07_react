import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  const sortedMovies = [...movies].sort((a, b) => b.year - a.year);

  return (
    <div>
      <h2>영화 목록</h2>
      <ul>
        {sortedMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title} ({movie.year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;