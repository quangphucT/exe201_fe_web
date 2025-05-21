import './index.scss';
import { Input, Avatar, Button } from 'antd';
import { UserOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div style={{cursor: 'pointer'}} onClick={() => navigate("/home")} className="logo">Todo List</div>
      <Input
        placeholder="Search tasks..."
        prefix={<SearchOutlined />}
        className="search-bar"
        size="large"
      />
      <div className="user-actions">
        <Button
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