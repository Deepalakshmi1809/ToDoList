
import { Card, Typography, Row, Col } from 'antd';

import useTask from '../hooks/useTask';

import '../styles/pages/Home.css';

const { Title, Text } = Typography;

function Home() {
  const { tasks } = useTask();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <Card className="home-page">
      <Title level={2}>Dashboard</Title>

      <Text className="home-page__welcome">
        Welcome to your Todo List!
      </Text>

      <Row gutter={[16, 16]} className="home-page__summary">
        <Col xs={24} sm={12} lg={8}>
          <Card title="Total Tasks" className="home-page__card">
            <Title level={3}>{totalTasks}</Title>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card title="Pending Tasks" className="home-page__card">
            <Title level={3}>{pendingTasks}</Title>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card title="Completed Tasks" className="home-page__card">
            <Title level={3}>{completedTasks}</Title>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default Home;
