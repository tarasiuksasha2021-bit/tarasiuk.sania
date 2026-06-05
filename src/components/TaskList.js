import { Link } from "react-router-dom";

function TaskList({ tasks, onDelete }) {
  return (
    <>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>

          <Link to={`/tasks/${task.id}`}>
            Детальніше
          </Link>

          <button onClick={() => onDelete(task.id)}>
            Видалити
          </button>
        </div>
      ))}
    </>
  );
}

export default TaskList;