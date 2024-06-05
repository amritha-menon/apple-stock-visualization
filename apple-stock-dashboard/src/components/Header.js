import React from 'react';
import { Layout, Menu } from 'antd';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="header">
      <div className="logo">APPLE STOCK DASHBOARD </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu">
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
