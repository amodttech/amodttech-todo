// TodoList.js
import React, { useEffect, useState } from "react";
import Project from "./Project";

const ProjectList = ({setProjects, projects}) => {

  return (
    <div>
      <h1>Project List</h1>
      <ul className="project-list">
        {projects.map((project) => (
          <Project key={project.id} project={project} setProjects={setProjects} projects={projects}/>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
