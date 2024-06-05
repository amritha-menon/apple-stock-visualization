import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import { Chart } from 'react-google-charts';
import './CandleStickChart.css'; 

const CandleStickChart = ({ data, setTimeRange }) => {
  if (!data || !Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  const chartData = [
    ['Date', 'Low', 'Open', 'Close', 'High'],
    ...data.map((item) => [new Date(item.t), item.l, item.o, item.c, item.h]),
  ];

  const options = {
    legend: 'none',
    bar: { groupWidth: '100%' },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
    },
  };

  return (
    <Card title="Apple Stock Candlestick Chart" className="candlestick-chart-card">
      <Row gutter={16}>
        <Col span={20}>
        <div className="chart-container">
          <Chart
            chartType="CandlestickChart"
            width="100%"
            height="400px"
            data={chartData}
            options={options}
          />
          </div>
        </Col>   
        <Col span={4} className="buttons-col">
            <Button className="duration" type="primary" block onClick={() => setTimeRange('1y')}>1 Year</Button>
            <Button className="duration" type="primary" block onClick={() => setTimeRange('6m')}>6 Months</Button>
            <Button className="duration" type="primary" block onClick={() => setTimeRange('3m')}>3 Months</Button>
            <Button className="duration" type="primary" block onClick={() => setTimeRange('1w')}>1 Week</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CandleStickChart;
