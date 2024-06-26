import React from 'react';
import { Row, Col, Avatar, Card } from 'antd';
import './FinancialRatios.css'; 

const ratioItems = [
  { name: 'P/E Ratio', value: 'pe_ratio', unit: '' },
  { name: 'P/S Ratio', value: 'ps_ratio', unit: '' },
  { name: 'P/B Ratio', value: 'pb_ratio', unit: '' },
  { name: 'PEG Ratio', value: 'peg_ratio', unit: '' },
  { name: 'Current Ratio', value: 'current_ratio', unit: '' },
  { name: 'Debt to Equity', value: 'debt_to_equity_ratio', unit: '' },
  { name: 'EPS Growth', value: 'eps', unit: 'USD'},
  { name: 'Market Cap', value: 'market_ap', unit: 'USD'},
  { name: 'Shares Outstanding', value: 'shares_outstanding',  unit: 'million' },
];

const FinancialRatios = ({ ratios }) => {
  return (
    <Card title="Key Earnings Data" className="financial-ratios-card">
      <Row justify="center" gutter={[16, 16]} className="ratios-row">
        {ratioItems.map((item, index) => (
          <Col key={item.name} className={`ratio-item ${index < 5 ? 'first-row' : 'second-row'}`}>
            <Avatar size={80} className="ratio-avatar">{item.name}</Avatar>
            <div className="ratio-value">{ratios[item.value]} {item.unit}</div>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default FinancialRatios;
