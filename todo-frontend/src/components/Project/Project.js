import React from "react";
import Todo from "../Todo/Todo";
import ProjectDelete from "./ProjectDelete";
import ProjectUpdate from "./ProjectUpdate";
import ProjectDetail from "./ProjectDetail";
import TodoNew from "../Todo/TodoNew";

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
      <ProjectDetail project={project} />
      <TodoNew
        project={project}
        projects={projects}
        setProjects={setProjects}
      />
      <ul className="todo-list">
        {project.todos?.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            setProjects={setProjects}
            project={project}
            projects={projects}
          />
        ))}
      </ul>
    </li>
  );
}

export default Project;
