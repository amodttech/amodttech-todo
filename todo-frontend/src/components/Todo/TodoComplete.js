import React from "react";
import axios from "axios";
import { BACKEND } from "../../utilities/helpers";

function TodoComplete({ todo, project, projects, setProjects }) {
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // Send a DELETE request to your backend to delete the todo
      await axios.delete(`${BACKEND}/${project.id}/todos/${todo.id}`);

      // Update the projects array by filtering out the deleted todo
      const updatedProjects = projects.map((p) => {
        if (p.id === project.id) {
          // Clone the project object to avoid modifying the original
          const updatedProject = { ...p };
          // Filter out the deleted todo from the todos array
          updatedProject.todos = updatedProject.todos.filter(
            (t) => t.id !== todo.id
          );
          return updatedProject;
        }
        return p;
      });

      // Update the state with the updated projects array
      setProjects(updatedProjects);

      console.log("Todo deleted successfully.");
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return <div onClick={handleClick}>❌</div>;
}

export default TodoComplete;
