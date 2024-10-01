import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import moviesData from './data/Movies.json';
import MovieList from './component/MovieList';
import AddMovie from './component/AddMovie';
import MovieDetail from './component/MovieDetail';
import Home from './page/Home';
import LayOut from './layout/LayOut';

function App() {
  const [movies, setMovies] = useState(moviesData);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
    console.log('추가된 영화 목록:', movies); 
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<MovieList movies={movies} />} />
          <Route path="add-movie" element={<AddMovie addMovie={addMovie} />} />
          <Route path="movies/:id" element={<MovieDetail movies={movies} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;