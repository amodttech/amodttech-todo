import React from "react";
import { dateParser } from "../utilities/helpers";
import TodoComplete from "./TodoComplete";

function Todo({ todo, project, projects, setProjects }) {
  return (
    <li key={todo.id} className="todo-details">
      <div className="todo-name">name: {todo.name}</div>
      <div className="todo-deadline">deadline: {dateParser(todo.deadline)}</div>
      <div className="todo-complete">
        complete?: {todo.complete ? `completed` : `incomplete`}
      </div>
      <div className="todo-created">
        date created: {dateParser(todo.created_at)}
      </div>
      <TodoComplete
        todo={todo}
        setProjects={setProjects}
        projects={projects}
        project={project}
      />
    </li>
  );
}

export default Todo;
