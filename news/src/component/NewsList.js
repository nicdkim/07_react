import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import './NewsList.css';
function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = 'b2f485cd2f274a5ba62325da31653420';
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      
      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('뉴스를 불러오는 중 오류 발생:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
    <h1 className="title">뉴스</h1>
        <div className="news-container">
        {articles.length > 0 ? (
            articles.map((article, index) => (
            <NewsItem key={index} article={article} />
            ))
        ) : (
            <p>뉴스 기사가 없습니다.</p>
        )}
        </div>
    </div>
  );
}

export default NewsList;