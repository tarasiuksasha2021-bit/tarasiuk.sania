import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Головна</Link>{" | "}
      <Link to="/tasks">Задачі</Link>{" | "}
      <Link to="/tasks/add">Додати</Link>
    </nav>
  );
}

export default Navigation;