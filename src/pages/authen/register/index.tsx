import './index.scss';
import { Form, Input, Button, Typography, Space } from 'antd';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import logoBee from '../../../assets/images/1740063267602.gif';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const RegisterPage = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Register values:', values);
    // TODO: handle register
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="bee-image">
          <img src={logoBee} alt="Bee" />
        </div>

        <Title level={2} className="title">Ready to<br />take breaks?</Title>

        <Form
          name="register-form"
          layout="vertical"
          className="register-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your Name" className="input" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Email is not valid' },
            ]}
          >
            <Input placeholder="Email" className="input" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Password" className="input" />
          </Form.Item>

          <div className="social-buttons">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button icon={<FaFacebookF />} className="facebook" block>
                Facebook
              </Button>
              <Button icon={<FcGoogle />} className="google" block>
                Google
              </Button>
            </Space>
          </div>

          <Text className="signin-text" onClick={() => navigate("/login-page")}>
            Already have an account? <span>Sign In</span>
          </Text>

          <Button type="primary" htmlType="submit" className="submit-btn" block>
            I’m Ready!
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
