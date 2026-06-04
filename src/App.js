import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  const API_URL =
    "http://localhost:3001/tasks";

  // GET
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(
          "Помилка отримання даних"
        );
      }

      const data = await response.json();

      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // POST
  const addTask = async (title) => {
    const newTask = {
      title,
      completed: false
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify(newTask)
      });

      const data = await response.json();

      setTasks([...tasks, data]);
    } catch {
      setError(
        "Помилка додавання задачі"
      );
    }
  };

  // DELETE
  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      setTasks(
        tasks.filter(
          (task) => task.id !== id
        )
      );
    } catch {
      setError(
        "Помилка видалення задачі"
      );
    }
  };

  // Виконано / Невиконано
  const toggleTask = async (task) => {
    try {
      const updatedTask = {
        ...task,
        completed: !task.completed
      };

      await fetch(
        `${API_URL}/${task.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(
            updatedTask
          )
        }
      );

      setTasks(
        tasks.map((t) =>
          t.id === task.id
            ? updatedTask
            : t
        )
      );
    } catch {
      setError(
        "Помилка оновлення задачі"
      );
    }
  };

  const filteredTasks = tasks.filter(
    (task) => {
      if (filter === "completed")
        return task.completed;

      if (filter === "active")
        return !task.completed;

      return true;
    }
  );

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <TaskForm addTask={addTask} />

      <h3>Фільтр</h3>

      <button
        onClick={() => setFilter("all")}
      >
        Усі
      </button>

      <button
        onClick={() =>
          setFilter("completed")
        }
      >
        Виконані
      </button>

      <button
        onClick={() =>
          setFilter("active")
        }
      >
        Невиконані
      </button>

      {loading && <h3>Завантаження...</h3>}

      {error && (
        <h3 style={{ color: "red" }}>
          {error}
        </h3>
      )}

      {!loading && (
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;