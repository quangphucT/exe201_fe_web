import './index.scss';
import { Input, Avatar, Button, Image } from 'antd';
import { UserOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import logoBee from '../../assets/images/1740063267602.gif'
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className='wrapper-header-main-homeScreen'>
        <h6 style={{ cursor: 'pointer' }} onClick={() => navigate("/home")} className="logo">ChronoBuddy</h6>
        <Image onClick={() => navigate("/home")} preview={false} src={logoBee} width={40} height={40} />
      </div>
      <Input
        placeholder="Search tasks..."
        prefix={<SearchOutlined />}
        className="search-bar"
        size="large"
      />
      <div className="user-actions">
        <Button onClick={() => navigate("add-projects-tasks")}
          type="primary"
          icon={<PlusOutlined />}
          className="add-task-btn"
          size="large"
        >
          Add Task
        </Button>
        <Avatar onClick={() => navigate("profile-page")} size="large" icon={<UserOutlined />} className="user-avatar" />
      </div>
    </div>
  );
};

export default Header;