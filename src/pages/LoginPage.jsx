import { Form, Input,  Button }  from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {Link,useLocation} from "react-router-dom";
import React, { useEffect } from 'react';
import { userActions } from '../_actions';


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 6,
    },
  };
 
  
  
const Login1= () => {
  
    
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  

    const dispatch = useDispatch();
    const location = useLocation();
    
    

   
  
  const onFinish = (values) => {
      console.log('Received values of form: ', values);
      const { from } = location.state || { from: { pathname: "/" } };
       dispatch(userActions.login(values.username,values.password,from));    
       
      
     };
    
    
      useEffect(() => {   
        
     dispatch(userActions.logout()); 
       
   }, );
 
   


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
        <Input
        prefix={<UserOutlined className="site-form-item-icon" />}  placeholder="Username" />
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
        <Button type="primary" htmlType="submit" className="login-form-button" >  {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        
          Login
        </Button>
        Or  <Link to="/register">Register</Link>
      </Form.Item>
    </Form>
  );
};
 export default Login1;