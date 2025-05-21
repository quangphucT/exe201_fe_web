import './index.scss';
import { Input, Button } from 'antd';

import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import logoBee from '../../../assets/images/1740063267602.gif'
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <div className="register-page">
            <div className="register-container">
                <div className="bee-image">
                    <img src={logoBee} alt="Bee" />
                </div>

                <h2 className="title">Ready to<br />take breaks?</h2>

                <div className="form">
                    <Input placeholder="Your Name" className="input" />
                    <Input placeholder="Email" type="email" className="input" />
                    <Input.Password placeholder="Password" className="input" />

                    <div className="social-buttons">
                        <Button className="facebook">
                            <FaFacebookF /> Facebook
                        </Button>
                        <Button className="google" icon={<FcGoogle />}>
                            Google
                        </Button>
                    </div>

                    <p onClick={() => navigate("/login-page") } className="signin-text">
                        Already have an account? <span>Sign In</span>
                    </p>

                    <Button type="primary" className="submit-btn">I’m Ready!</Button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
