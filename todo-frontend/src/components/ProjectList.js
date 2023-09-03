// TodoList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Project from "./Project";
import { BACKEND } from "../utilities/helpers";

const ProjectList = ({setProjects, projects}) => {
  

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
    <div>
      <h1>Project List</h1>
      <ul className="project-list">
        {projects.map((project) => (
          <Project project={project} setProjects={setProjects} projects={projects}/>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
