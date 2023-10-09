

import React, {useState
  ,useEffect} from 'react';
import { Link, useNavigate, matchRoutes, useLocation } from 'react-router-dom'
import { Menu } from 'antd';

import { default_routes } from '../router/routes'

const items = [
  {
    label: '概览页',
    key: '/'
  },
  {
    label: '图片库',
    key: '/pictures'
  },
  {
    label: '用户管理',
    key: '/system/userTable'
  }
];


export default () => {
  const navigate = useNavigate()

  const location = useLocation()
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string []>([])
  const [isInit, setIsInit] = useState(false)


  useEffect(() => {
    setDefaultSelectedKeys([location.pathname])
    setIsInit(true)
  }, [location.pathname, isInit])
  
  if(!isInit) return null

  const onClick = (e) => {
    console.log('click ', e)
    navigate(e.key)
  }
  return (
    <>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={defaultSelectedKeys}
        items={items}
      />
    </>
  );
}