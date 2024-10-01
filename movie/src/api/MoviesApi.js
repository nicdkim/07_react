import moviesData from '../data/Movies.json';

export function getMovies() {
  return moviesData;
}

export function addMovieApi(movies, newMovie) {
  const updatedMovies = [...movies, { ...newMovie, id: movies.length + 1 }];
  return updatedMovies;
}