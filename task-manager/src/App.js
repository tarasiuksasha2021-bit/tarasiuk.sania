import { useState } from 'react';
import TaskContext from './context/TaskContext';

import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTask
      }}
    >
      <Header />
      <TaskForm />
      <TaskList />
      <Statistics />
      <Footer />
    </TaskContext.Provider>
  );
}

export default App;