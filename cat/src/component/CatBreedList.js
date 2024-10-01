import React from 'react';

function CatBreedList({ catBreeds }) {
  return (
    <ul>
      {catBreeds && catBreeds.length > 0 ? (
        catBreeds.map((breed, index) => (
          <li key={index}>
            {breed.id} - {breed.name} (출신 : {breed.origin} / 특징 : {breed.temperament})
          </li>
        ))
      ) : (
        <p>검색된 품종이 없습니다.</p>
      )}
    </ul>
  );
}

export default CatBreedList;