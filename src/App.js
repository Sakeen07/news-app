import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=88597c974382495fbb4c777c764a0fd4"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);


  return (
    <>
      <div className="header">
        <h1> USA Post </h1>
      </div>

      <div className="body">
      {news && news.map((item, index) => {
        return (
          <Card 

          key={index}
          hoverable
          cover={<img alt="image" src={item.urlToImage} />}
          >
            <Meta className='title' title={item.title}/>
            <Meta className='description' description={item.content} />

            <Meta id="author" title={item.author}/>
            <Meta id="company" title={item.publishedAt}/>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Button type="primary" style={{ marginTop: "10px" }}>
                Read More
              </Button>
            </a>
          </Card>
        );
      })}
      </div>
    </>
  );
}

export default App;
