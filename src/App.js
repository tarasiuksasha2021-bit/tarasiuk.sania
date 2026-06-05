import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import NotFound from "./pages/NotFound";

import AppContext from "./context/AppContext";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <AppContext.Provider
      value={{ tasks, setTasks }}
    >
      <Header />
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/tasks/add"
          element={<AddTask />}
        />

        <Route
          path="/tasks/:id"
          element={<TaskDetails />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </AppContext.Provider>
  );
}

export default App;