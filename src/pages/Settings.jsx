
import { useState } from 'react';

import {
  Card,
  Typography,
  Switch,
  Space,
  Divider,
} from 'antd';

import '../styles/pages/Settings.css';

const { Title, Text } = Typography;

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Card className="settings-page">
      <Title level={2}>Settings</Title>

      <Text className="settings-page__description">
        Manage your application preferences.
      </Text>

      <Card className="settings-page__container">
        <Space className="settings-page__option">
          <div>
            <Title level={5}>Notifications</Title>

            <Text>
              Enable or disable notifications.
            </Text>
          </div>

          <Switch
            checked={notifications}
            onChange={setNotifications}
          />
        </Space>

        <Divider />

        <Space className="settings-page__option">
          <div>
            <Title level={5}>Dark Mode</Title>

            <Text>
              Enable or disable dark mode.
            </Text>
          </div>

          <Switch
            checked={darkMode}
            onChange={setDarkMode}
          />
        </Space>
      </Card>
    </Card>
  );
}

export default Settings;
