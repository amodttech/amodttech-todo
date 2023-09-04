export const dateParser = (dateString) => {
  const strippedFormat = Date.parse(dateString);
  const date = new Date(strippedFormat);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const BACKEND = `http://localhost:3000/projects`;

export const onUpdateProject = (updatedProject, projects, setProjects) => {
  // Find the index of the updated project in the projects array
  const updatedProjectIndex = projects.findIndex(
    (p) => p.id === updatedProject.id
  );

  if (updatedProjectIndex !== -1) {
    // Update the project in the projects array with the updated data
    const updatedProjects = [...projects];
    updatedProjects[updatedProjectIndex] = updatedProject;

    // Update the state with the new projects array
    setProjects(updatedProjects);
  }
};

export const updateProjectTodos = (
  todoResponse,
  project,
  projects,
  setProjects
) => {
  // Find the index of the updated project in the projects array
  const projectIndex = projects.findIndex((p) => p.id === project.id);

  if (projectIndex !== -1) {
    // Clone the projects array to avoid mutating the original state
    const updatedProjects = [...projects];
    
    // Clone the project object to avoid mutating it
    const updatedProject = { ...updatedProjects[projectIndex] };

    // Update the todos array for the project with the new todo
    updatedProject.todos = [...updatedProject.todos, todoResponse];

    // Replace the old project with the updated project in the cloned array
    updatedProjects[projectIndex] = updatedProject;

    // Update the state with the new projects array
    setProjects(updatedProjects);
  }
};

