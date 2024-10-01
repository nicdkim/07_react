import { useState } from 'react';
import axios from 'axios';
import catBreedsData from '../data/CatBreeds.json';

const apiKey = 'live_I3nzKnTpNjzyXLZp0RtbUU1mRjTwK7uAEECexmUv6u3djBsNDYSaX4Isn5PDyZo9';

export function useCatSearch() {
  const [catBreeds, setCatBreeds] = useState([]);
  const [catImage, setCatImage] = useState(null);

  const searchCatBreeds = async (searchTerm) => {
    const breed = catBreedsData.find(
      (breed) =>
        breed.code.toLowerCase() === searchTerm.toLowerCase() ||
        breed.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (!breed) {
      alert('해당 품종을 찾을 수 없습니다. 다시 입력하세요.');
      return;
    }

    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.code}`,
        {
          headers: {
            'x-api-key': apiKey,
          },
        }
      );

      console.log("API 응답 데이터:", response.data);

      if (response.data && response.data.length > 0) {
        const breeds = response.data[0].breeds;
        const image = response.data[0].url;

        setCatBreeds(breeds);
        setCatImage(image);
      } else {
        alert('해당 품종에 대한 이미지를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('데이터 못가져옴 :', error);
    }
  };

  return { catBreeds, catImage, searchCatBreeds };
}