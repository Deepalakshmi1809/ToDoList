
import { useState } from 'react';

import {
  Card,
  Typography,
  Input,
  Button,
  Empty,
  List,
  Space,
  Checkbox,
  DatePicker,
} from 'antd';

import { DeleteOutlined } from '@ant-design/icons';

import useTask from '../hooks/useTask';

import '../styles/pages/Tasks.css';

const { Title, Text } = Typography;
const { TextArea } = Input;

function Task() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);

  const {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
  } = useTask();

  const handleAddTask = () => {
    if (title.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      date: date ? date.format('YYYY-MM-DD') : null,
      completed: false,
    };

    addTask(newTask);

    setTitle('');
    setDescription('');
    setDate(null);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleToggleTask = (taskId) => {
    toggleTask(taskId);
  };

  return (
    <Card className="tasks-page">
      <Title level={2}>My Tasks</Title>

      <Text className="tasks-page__description">
        Manage your daily tasks here.
      </Text>

      {/* Task Form */}
      <Card className="tasks-page__container">
        <Space
          direction="vertical"
          size="middle"
          className="tasks-page__form"
        >
          <Input
            placeholder="Enter task title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <TextArea
            placeholder="Enter task description"
            rows={4}
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
          />

          <DatePicker
            placeholder="Select task date"
            value={date}
            onChange={(selectedDate) =>
              setDate(selectedDate)
            }
            className="tasks-page__date"
          />

          <Button
            type="primary"
            onClick={handleAddTask}
          >
            Add Task
          </Button>
        </Space>
      </Card>

      {/* Task List */}
      <Card className="tasks-page__container">
        <Title level={4}>Task List</Title>

        {tasks.length === 0 ? (
          <Empty description="No tasks available" />
        ) : (
          <List
            dataSource={tasks}
            rowKey="id"
            renderItem={(task) => (
              <List.Item
                actions={[
                  <Button
                    key="delete"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() =>
                      handleDeleteTask(task.id)
                    }
                  >
                    Delete
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={
                    <Checkbox
                      checked={task.completed}
                      onChange={() =>
                        handleToggleTask(task.id)
                      }
                    >
                      <Text
                        className={
                          task.completed
                            ? 'tasks-page__completed'
                            : ''
                        }
                      >
                        {task.title}
                      </Text>
                    </Checkbox>
                  }
                  description={
                    <>
                      <Text>{task.description}</Text>

                      {task.date && (
                        <Text className="tasks-page__date-text">
                          {' '}
                          | Date: {task.date}
                        </Text>
                      )}
                    </>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </Card>
    </Card>
  );
}

export default Task;
