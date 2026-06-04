import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Введіть назву задачі");
      return;
    }

    addTask(title);

    setTitle("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Назва задачі"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">
        Додати
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default TaskForm;