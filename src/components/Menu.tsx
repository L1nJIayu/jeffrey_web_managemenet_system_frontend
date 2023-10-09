

import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

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
    <>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['概览页']}
        items={items}
      />
      <Link label="概览" to="/main/home/1" >概览</Link>
      <Link label="用户列表" to="/main/userTable" >用户列表</Link>
    </>
  );
}