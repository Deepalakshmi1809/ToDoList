
import { useState } from 'react';

import {
  Card,
  Typography,
  Calendar as AntCalendar,
  List,
  Empty,
} from 'antd';

import useTask from '../hooks/useTask';

import '../styles/pages/Calendar.css';

const { Title } = Typography;

function Calendar() {
  const { tasks } = useTask();

  const [selectedDate, setSelectedDate] = useState(null);

  const dateKey = selectedDate
    ? selectedDate.format('YYYY-MM-DD')
    : null;

  const dateTasks = tasks.filter(
    (task) => task.date === dateKey
  );

  return (
    <Card className="calendar-page">
      <Title level={2}>Task Calendar</Title>

      <AntCalendar
        fullscreen={false}
        onSelect={(date) => setSelectedDate(date)}
      />

      <Card className="calendar-page__tasks">
        <Title level={4}>
          {selectedDate
            ? `Tasks for ${dateKey}`
            : 'Select a date'}
        </Title>

        {dateTasks.length === 0 ? (
          <Empty description="No tasks for this date" />
        ) : (
          <List
            dataSource={dateTasks}
            renderItem={(task) => (
              <List.Item>
                {task.title}
              </List.Item>
            )}
          />
        )}
      </Card>
    </Card>
  );
}

export default Calendar;
