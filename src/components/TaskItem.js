function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
          marginRight: "10px"
        }}
      >
        {task.title}
      </span>

      <button
        onClick={() => toggleTask(task)}
      >
        {task.completed
          ? "Невиконано"
          : "Виконано"}
      </button>

      <button
        onClick={() => deleteTask(task.id)}
        style={{ marginLeft: "10px" }}
      >
        Видалити
      </button>
    </li>
  );
}

export default TaskItem;