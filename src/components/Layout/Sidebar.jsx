
import { Layout, Menu } from 'antd';

import {
  HomeOutlined,
  UnorderedListOutlined,
  CalendarOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import {
  useNavigate,
  useLocation,
} from 'react-router-dom';

import '../../styles/components/Sidebar.css';

const { Sider } = Layout;

function Sidebar({ onNavigate }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '/task',
      icon: <UnorderedListOutlined />,
      label: 'Task',
    },
    {
      key: '/calendar',
      icon: <CalendarOutlined />,
      label: 'Calendar',
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);

    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <Sider width={220} className="sidebar">
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
      />
    </Sider>
  );
}

export default Sidebar;
