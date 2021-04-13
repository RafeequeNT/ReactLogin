import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 6,
    },
  };

const Login1= () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form {...layout} 
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
      label="username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        label="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      
      <Form.Item  wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or  <Link to="/Register">Register</Link>
      </Form.Item>
    </Form>
  );
};
 export default Login1;