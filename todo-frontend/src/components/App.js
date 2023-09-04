// Example using react-router-dom
import ProjectNew from "./Project/ProjectNew";
import ProjectList from "./Project/ProjectList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND } from "../utilities/helpers";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(BACKEND);
        const fetchedProjects = response.data;
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="App">
      <ProjectNew projects={projects} setProjects={setProjects} />
      <ProjectList projects={projects} setProjects={setProjects} />
    </div>
  );
}

export default App;
