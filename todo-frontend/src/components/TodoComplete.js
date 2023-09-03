import React, { useState } from "react";
import axios from "axios";
import { BACKEND } from "../utilities/helpers";

function TodoComplete({ todo, project, projects, setProjects }) {
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend to create a new project
      const response = await axios.delete(
        `${BACKEND}/${project.id}/todos/${todo.id}`
      ); // Adjust the URL as needed
      console.log("todo deleted:", response.data);
      setProjects([...projects, response.data]);
      // Clear the form after successful submission
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return <div onClick={handleClick}>❌</div>;
}

export default TodoComplete;
