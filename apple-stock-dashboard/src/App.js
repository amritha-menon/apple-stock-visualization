import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from 'antd';
import './App.css';
import Header from './components/Header';
import FinancialRatios from './components/FinancialRatios';
import AnalystEstimates from './components/AnalystEstimates';
import CandleStickChart from './components/CandleStickChart';
import NewsArticles from './components/NewsArticles';

const { Content, Footer } = Layout;

const App = () => {
  const [financialData, setFinancialData] = useState(null);
  const [timeRange, setTimeRange] = useState('1y');

  useEffect(() => {
    axios.get('https://apple-stock-dashboard-amritha-menon-amritha-menons-projects.vercel.app/api/financials')
      .then(response => {
        const data = response.data;

        const synthesizeCandlestickData = (range) => {
          const data = [];
          let startDate = new Date();
          startDate.setFullYear(startDate.getFullYear() - 1);

          const generateDataPoint = (date) => {
            const open = Math.random() * 100 + 100;
            const close = open + (Math.random() * 10 - 5);
            const high = Math.max(open, close) + Math.random() * 5;
            const low = Math.min(open, close) - Math.random() * 5;
            return {
              t: new Date(date),
              o: open,
              h: high,
              l: low,
              c: close,
            };
          };

          if (range === '1y') {
            for (let i = 0; i < 12; i++) {
              const date = new Date(startDate);
              date.setMonth(date.getMonth() + i);
              data.push(generateDataPoint(date));
            }
          } else if (range === '6m') {
            for (let i = 0; i < 6; i++) {
              const date = new Date(startDate);
              date.setMonth(date.getMonth() + 6 + i);
              data.push(generateDataPoint(date));
            }
          } else if (range === '3m') {
            for (let i = 0; i < 3; i++) {
              const date = new Date(startDate);
              date.setMonth(date.getMonth() + 9 + i);
              data.push(generateDataPoint(date));
            }
          } else if (range === '1w') {
            for (let i = 0; i < 7; i++) {
              const date = new Date(startDate);
              date.setDate(date.getDate() + 358 + i);
              data.push(generateDataPoint(date));
            }
          }

          return data;
        };

        setFinancialData({
          ...data,
          candlestickData: synthesizeCandlestickData(timeRange),
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [timeRange]);

  return (
    <div className='application'>
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            {financialData ? (
              <>
                <CandleStickChart data={financialData.candlestickData} setTimeRange={setTimeRange} />
                <FinancialRatios ratios={financialData} />
                <AnalystEstimates estimates={financialData.analyst_estimates} />
                <NewsArticles news={financialData.news} />
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', fontFamily: 'oswald' }}>Stock Dashboard ©2024 Created by Amritha Menon</Footer>
      </Layout>
    </div>
  );
};

export default App;
