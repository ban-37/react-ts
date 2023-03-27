import React from 'react'
import { Button,  Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};


const LoginView = () => {
  return (
    <div className='loginBox'>
      <div className='loginBox-header'>

      <span className='primary'>完美世界</span><h2>后台登录</h2>
      </div>
    <Form
    name="basic"

    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input placeholder="用户名"/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password  placeholder="密码" />
    </Form.Item>


    <Form.Item >
      <Button type="primary" htmlType="submit">
        登录
      </Button>
    </Form.Item>
  </Form>

    </div>
  )
}
export default LoginView