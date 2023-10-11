
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import './Login.scss'

const App: React.FC = () => {
  const login = async (values: any) => {
    console.log('表单值: ', values);

    try {
      const { data } = await loginApi(params)

      
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <div className="loginPage">
      <div className="loginPage__form">
        <div class="title">后台管理系统</div>
        <div className="loginPage__form__box">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={login}
          >
            <Form.Item
              name="userName"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item className="login-form-forgot">
              <a  href="">
                忘记密码？
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block className="login-form-button">登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default App;