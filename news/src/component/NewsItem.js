import React from 'react';
import './NewsItem.css';

function NewsItem({ article }) {
  return (
    <div className="news-card">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="news-image" />
      )}
      <h2 className="news-title">{article.title}</h2>
      <p className="news-description">{article.description}</p>
      <a 
      href={article.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="read-more">
        더 읽기
      </a>
    </div>
  );
}

export default NewsItem;