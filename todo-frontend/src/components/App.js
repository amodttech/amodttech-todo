// Example using react-router-dom
import ProjectNew from "./Project/ProjectNew";
import ProjectList from "./Project/ProjectList";
import React, { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div className="App">
      <ProjectNew projects={projects} setProjects={setProjects} />
      <ProjectList projects={projects} setProjects={setProjects} />
    </div>
  );
}

export default App;
