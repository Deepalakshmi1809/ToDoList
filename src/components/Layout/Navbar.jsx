
import { useState } from 'react';

import {
  Layout,
  Typography,
  Button,
  Drawer,
} from 'antd';

import {
  PlusOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar';

import '../../styles/components/Navbar.css';

const { Header } = Layout;
const { Title } = Typography;

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleAddTask = () => {
    navigate('/task');
    setMenuOpen(false);
  };

  return (
    <>
      <Header className="navbar">
        <Button
          className="navbar__menu-button"
          icon={<MenuOutlined />}
          onClick={() => setMenuOpen(true)}
        />

        <Title level={3} className="navbar__title">
          Todo List
        </Title>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddTask}
        >
          Add Task
        </Button>
      </Header>

      <Drawer
        title="Todo List Menu"
        placement="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        className="navbar__drawer"
      >
        <Sidebar onNavigate={() => setMenuOpen(false)} />
      </Drawer>
    </>
  );
}

export default Navbar;
