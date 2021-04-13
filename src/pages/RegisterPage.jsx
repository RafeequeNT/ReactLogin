import { Form, Input,  Button } from 'antd';
import {Link} from "react-router-dom";
 import { useDispatch } from 'react-redux';
 import { userActions } from '../_actions';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 6,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  
};
/* eslint-enable no-template-curly-in-string */

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onFinish = (value) => {
    console.log(value);
    dispatch(userActions.register(value));
  };   
  return (
    <Form {...layout} name="nest-messages"  onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name= 'fname'
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name= 'lname'
        label="Last Name"
        rules={[
          {
            required:true,
          },
        ]}
      >
          <Input />
        </Form.Item>

        <Form.Item
        name= 'username'
        label="Username"
        rules={[
          {
            required:true,
          },
        ]}
      >
          <Input />
        </Form.Item>
        <Form.Item
        name= 'password'
        label="Password"
        rules={[
          {
            required:true,
          },
        ]}
      >
          <Input />
        </Form.Item>
        
        
     
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Link to="/Login">Cancel</Link>
      </Form.Item>
    </Form>
  );
};
export default RegisterPage;