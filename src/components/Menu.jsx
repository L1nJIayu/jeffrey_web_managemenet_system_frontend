

import React from 'react';
import { Menu } from 'antd';

const items = [
  {
    label: '概览页',
    key: '概览页'
  },
  {
    label: '图片库',
    key: '图片库'
  },
  {
    label: '用户管理',
    key: '用户管理'
  }
];


export default () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={['概览页']}
      items={items}
    />
  );
}