import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function TaskItem({ task }) {
  const { deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <div>
      <h3
        style={{
          textDecoration: task.completed
            ? 'line-through'
            : 'none'
        }}
      >
        {task.title}
      </h3>

      <button onClick={() => toggleTask(task.id)}>
        Виконано
      </button>

      <button onClick={() => deleteTask(task.id)}>
        Видалити
      </button>
    </div>
  );
}

export default TaskItem;