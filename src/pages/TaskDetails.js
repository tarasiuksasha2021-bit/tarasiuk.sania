import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/tasks/${id}`)
      .then(res => res.json())
      .then(setTask);
  }, [id]);

  if (!task) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskDetails;