import { useContext, useRef } from 'react';
import TaskContext from '../context/TaskContext';

function TaskForm() {
  const { addTask } = useContext(TaskContext);

  const inputRef = useRef();

  function handleAddTask() {
    const title = inputRef.current.value;

    if (title.trim() === '') {
      return;
    }

    addTask(title);

    inputRef.current.value = '';
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Введіть задачу"
        ref={inputRef}
      />

      <button onClick={handleAddTask}>
        Додати
      </button>
    </div>
  );
}

export default TaskForm;