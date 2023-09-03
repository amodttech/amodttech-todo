import React from "react";
import { dateParser } from "../utilities/helpers";
import Todo from "./Todo";
import ProjectDelete from "./ProjectDelete";
import ProjectUpdate from "./ProjectUpdate";

function Project({ project, setProjects, projects }) {
  return (
    <li key={project.id} className="project-item">
      <ProjectDelete
        project={project}
        projects={projects}
        setProjects={setProjects}
      />
      <ProjectUpdate
        project={project}
        projects={projects}
        setProjects={setProjects}
      />
      <h4 className="project-name">{project.name}</h4>
      <ul className="project-details-list">
        <li className="project-detail-item">
          <div className="project-detail-deadline">
            Deadline: {dateParser(project.deadline)}
          </div>
          <ul className="todo-list">
            {project.todos?.map((todo) => (
              <Todo
                todo={todo}
                setProjects={setProjects}
                project={project}
                projects={projects}
              />
            ))}
          </ul>
        </li>
      </ul>
    </li>
  );
}

export default Project;
