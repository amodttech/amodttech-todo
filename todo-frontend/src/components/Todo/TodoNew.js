import React, { useState } from "react";
import axios from "axios";
import { BACKEND } from "../../utilities/helpers";

/*
name
deadline
priority
complete
project_id
created_at
updated_at
*/

function TodoNew({ project, projects, setProjects }) {
  const [todoData, setTodoData] = useState({
    name: "",
    deadline: "",
    priority: "",
    complete: false,
    project_id: project.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData({
      ...todoData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend to create a new project
      const response = await axios.post(`${BACKEND}/${project.id}/todos`, todoData); // Adjust the URL as needed
      console.log("New todo created:", response.data);
      setProjects([...projects, response.data]);
      // Clear the form after successful submission
      setTodoData({
        name: "",
        deadline: "",
        priority: ""
      });
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div>
      <h2>Create a New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Todo Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={todoData.name}
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
            value={todoData.deadline}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default TodoNew;
