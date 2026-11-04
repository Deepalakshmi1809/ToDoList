
import TaskProvider from './context/TaskContext';
import ThemeProvider from './context/ThemeContext';

import AppRouters from './routers/AppRouters';


function App() {
  return (
     <ThemeProvider>

       <TaskProvider>
      <AppRouters />
    </TaskProvider>
     </ThemeProvider>
   
  );
}

export default App;
