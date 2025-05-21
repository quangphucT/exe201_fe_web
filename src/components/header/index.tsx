import './index.scss';
import { Input, Avatar, Button } from 'antd';
import { UserOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Todo List</div>
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
        <Avatar size="large" icon={<UserOutlined />} className="user-avatar" />
      </div>
    </div>
  );
};

export default Header;