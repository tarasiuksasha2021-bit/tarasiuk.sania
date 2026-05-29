import { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <p>Задач немає</p>;
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;