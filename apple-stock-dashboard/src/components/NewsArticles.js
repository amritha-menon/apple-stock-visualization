import React from 'react';
import { List, Card, Divider } from 'antd';
import './NewsArticles.css'; // Import the CSS file for additional styling if needed

const NewsArticles = ({ news }) => {
  const data = Object.keys(news).map((key, index) => ({
    key: index,
    summary: news[key].summary,
    sentiment: news[key].sentiment,
  }));

  return (
    <Card title="News Articles" className="news-articles-card">
      <List
        itemLayout="vertical"
        dataSource={data}
        renderItem={(item, index) => (
          <React.Fragment key={item.key}>
            {index > 0 && <Divider />}
            <List.Item className="news-article-item">
              {/* <List.Item.Meta title={item.summary} /> */}
              <div>
                <div style={{fontSize: 24}}> {item.summary} </div>
                Sentiment: {item.sentiment.value} (Score: {item.sentiment.score})
              </div>
            </List.Item>
          </React.Fragment>
        )}
      />
    </Card>
  );
};

export default NewsArticles;
