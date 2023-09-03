import React, { useState } from "react";
import axios from "axios";
import { BACKEND } from "../utilities/helpers";

function ProjectDelete({ project, projects, setProjects }) {
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend to create a new project
      const response = await axios.delete(`${BACKEND}/${project.id}`); // Adjust the URL as needed
      console.log("project deleted:", response.data);
      // setProjects([...projects, response.data]);
      filterProject(project.id)
      // Clear the form after successful submission
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const filterProject = (projectId) => {
    // Filter out the deleted todo by its id
    const updatedProjects = projects.filter((project) => project.id !== projectId);
    setProjects(updatedProjects);
  };

  return <div onClick={handleClick}>❌</div>;
}

export default ProjectDelete;
