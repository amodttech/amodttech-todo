import React, { useState } from "react";
import axios from "axios";
import { BACKEND, onUpdateProject } from "../../utilities/helpers";

function ProjectUpdate({ project, setProjects, projects }) {
  const [updatedProject, setUpdatedProject] = useState({
    name: project.name,
    deadline: project.deadline,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProject({
      ...updatedProject,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the project
      const response = await axios.put(
        `${BACKEND}/${project.id}`,
        updatedProject
      ); // Adjust the URL as needed
      const updatedProjectData = response.data;

      // Call the callback function to update the project in the parent component's state
      onUpdateProject(updatedProjectData, projects, setProjects);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  return (
    <div className="project-update">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedProject.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={updatedProject.deadline}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default ProjectUpdate;
