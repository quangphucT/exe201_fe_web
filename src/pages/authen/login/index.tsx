import './index.scss';
import { Form, Input, Button, Typography, Space } from 'antd';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import logoBee from '../../../assets/images/1740063267602.gif';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    // TODO: handle login
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="bee-image">
          <img src={logoBee} alt="Bee" />
        </div>

        <Title level={2} className="title">Welcome back!</Title>

        <Form
          name="login-form"
          layout="vertical"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Email" className="input" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" className="input" />
          </Form.Item>

          <div className="form-extra">
            <Text className="forgot" onClick={() => navigate("/forgot-password")}>
              I forgot my account
            </Text>
          </div>

          <Button onClick={() => navigate("/home")} type="primary" htmlType="submit" block className="submit-btn">
            Do it!
          </Button>

          <Text className="signup-text" onClick={() => navigate("/register-page")}>
            Don’t have any account? <span>Make one</span>
          </Text>

          <div className="social-buttons">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button icon={<FaFacebookF />} block className="facebook">
                Facebook
              </Button>
              <Button icon={<FcGoogle />} block className="google">
                Google
              </Button>
            </Space>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
