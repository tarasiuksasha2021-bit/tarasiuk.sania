import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function Statistics() {
  const { tasks } = useContext(TaskContext);

  const completedTasks =
    tasks.filter(task => task.completed).length;

  const activeTasks =
    tasks.length - completedTasks;

  return (
    <div>
      <p>
        Усього задач: {tasks.length}
      </p>

      <p>
        Виконано: {completedTasks}
      </p>

      <p>
        Не виконано: {activeTasks}
      </p>
    </div>
  );
}

export default Statistics;