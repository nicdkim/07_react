import React from 'react';
import SearchForm from './component/SearchForm';
import CatImage from './component/CatImage';
import CatBreedList from './component/CatBreedList';
import { useCatSearch } from './api/UseCatSearch';

function App() {
  const { catBreeds, catImage, searchCatBreeds } = useCatSearch();

  return (
    <>
      <h1>고양이 품종 검색</h1>
      <SearchForm onSearch={searchCatBreeds}/>
      <CatImage catImage={catImage}/>
      <CatBreedList catBreeds={catBreeds}/>
    </>
  );
}

export default App;