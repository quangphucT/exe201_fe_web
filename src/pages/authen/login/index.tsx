import './index.scss';
import { Input, Button } from 'antd';

import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import logoBee from '../../../assets/images/1740063267602.gif'
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <div className="login-page">
            <div className="login-container">
              

                <div className="bee-image">
                    <img src={logoBee} alt="Bee" />
                </div>

                <h2 className="title">Welcome back!</h2>

                <div className="form">
                    <Input placeholder="Email" className="input" />
                    <Input.Password placeholder="Password" className="input" />

                    <p className="forgot" onClick={()=> navigate("/forgot-password")}>I forgot my account</p>

                    <p onClick={() => navigate("/register-page")} className="signup-text">
                        Don’t have any account? <span>Make one</span>
                    </p>

                    <div className="social-buttons">
                        <Button className="facebook">
                            <FaFacebookF /> Facebook
                        </Button>
                        <Button className="google" icon={<FcGoogle />}>
                            Google
                        </Button>
                    </div>

                    <Button type="primary" className="submit-btn">Do it!</Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
