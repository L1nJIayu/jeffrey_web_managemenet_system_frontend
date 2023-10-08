
import React from 'react';
import { Breadcrumb } from 'antd';


export default () => (
  <Breadcrumb
    items={[
      {
        title: '后台管理系统',
      },
      {
        title: '系统管理',
      },
      {
        title: '用户管理',
      },
    ]}
  />
);