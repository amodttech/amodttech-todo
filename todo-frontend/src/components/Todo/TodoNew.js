import React, { useState } from "react";
import axios from "axios";
import { BACKEND, updateProjectTodos } from "../../utilities/helpers";

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
      const response = await axios.post(
        `${BACKEND}/${project.id}/todos`,
        todoData
      ); // Adjust the URL as needed
      console.log("New todo created:", response.data);
      console.log('new todo projects (before)', projects)
      // setProjects([...projects, response.data]);
      updateProjectTodos(response.data, project,projects, setProjects)
      console.log('new todo projects (after)', projects)
      // Clear the form after successful submission
      setTodoData({
        name: "",
        deadline: "",
        priority: "",
      });
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div className="todo-new-form">
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
        <div>
          <label htmlFor="priority">Priority:</label>
          <input
            type="number"
            min="1"
            max="5"
            id="priority"
            name="priority"
            value={todoData.priority}
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
