import axios from 'axios';

export const getNews = async (query = 'latest') => {
  const apiKey = 'b2f485cd2f274a5ba62325da31653420';
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error('뉴스 가져오는데 에러발생 : ', error);
    return [];
  }
};