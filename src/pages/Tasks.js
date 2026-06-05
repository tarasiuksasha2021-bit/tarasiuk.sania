import { useEffect, useState, useContext } from "react";
import TaskList from "../components/TaskList";
import AppContext from "../context/AppContext";

function Tasks() {
  const { tasks, setTasks } = useContext(AppContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:3001/tasks")
      .then(res => res.json())
      .then(data => {
        console.log("API data:", data);

        // захист від неправильного формату
        const safeData = Array.isArray(data)
          ? data
          : data?.tasks || [];

        setTasks(safeData);
        setError("");
      })
      .catch(() => {
        setError("Помилка завантаження даних");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setTasks]);

  const deleteTask = (id) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE"
    }).then(() => {
      setTasks(prev =>
        prev.filter(task => task.id !== id)
      );
    });
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Список задач</h2>

      <TaskList
        tasks={tasks || []}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default Tasks;