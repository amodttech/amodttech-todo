import React, { useState } from "react";
import axios from "axios";
import { BACKEND } from "../utilities/helpers";

const NewProject = ({ setProjects, projects }) => {
  const [projectData, setProjectData] = useState({
    name: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend to create a new project
      const response = await axios.post(BACKEND, projectData); // Adjust the URL as needed
      console.log("New project created:", response.data);
      setProjects([...projects, response.data]);
      // Clear the form after successful submission
      setProjectData({
        name: "",
        deadline: "",
      });
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div>
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Project Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={projectData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={projectData.deadline}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default NewProject;
