
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from '../pages/Home';
import Task from '../pages/Task';
import Calendar from '../pages/Calendar';
import Settings from '../pages/Settings';

import MainLayout from '../components/Layout/MainLayout';

// inline comment: https://reactrouter.com/en/main/components/navigate
function AppRouters() {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/task" element={<Task />} />

          <Route path="/calendar" element={<Calendar />} />

          <Route path="/settings" element={<Settings />} />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </MainLayout>
    </HashRouter>
  )
}

export default AppRouters;
