import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!title || !description) {
      alert("Заповніть поля");
      return;
    }

    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
        completed: false
      })
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Назва"
        value={title}
        onChange={e =>
          setTitle(e.target.value)
        }
      />

      <br />

      <textarea
        placeholder="Опис"
        value={description}
        onChange={e =>
          setDescription(e.target.value)
        }
      />

      <br />

      <button>Додати</button>
    </form>
  );
}

export default TaskForm;