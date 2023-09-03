// Example using react-router-dom
import NewProject from "./NewProject";
import ProjectList from "./ProjectList";
import React, { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div className="App">
      <NewProject projects={projects} setProjects={setProjects} />
      <ProjectList projects={projects} setProjects={setProjects} />
    </div>
  );
}

export default App;
