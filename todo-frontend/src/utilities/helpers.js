export const dateParser = (dateString) => {
    const strippedFormat = Date.parse(dateString)
    const date = new Date(strippedFormat)
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    return date.toLocaleDateString('en-US', options)
}


export const BACKEND = `http://localhost:3000/projects`


export const onUpdateProject = (updatedProject, projects, setProjects) => {
    // Find the index of the updated project in the projects array
    const updatedProjectIndex = projects.findIndex((p) => p.id === updatedProject.id);

    if (updatedProjectIndex !== -1) {
      // Update the project in the projects array with the updated data
      const updatedProjects = [...projects];
      updatedProjects[updatedProjectIndex] = updatedProject;

      // Update the state with the new projects array
      setProjects(updatedProjects);
    }
  };