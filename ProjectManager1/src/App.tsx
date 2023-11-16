import ProjectSideBar from "./components/ProjectSideBar.tsx";
import ProjectContainer from "./components/ProjectContainer.tsx";
import { useState } from "react";
import NewProject from "./components/NewProject.tsx";
import NoProjectSelected from "./components/NoProjectSelected.tsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.ceil(Math.random() * 100);
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTasks(taskId) {
    setProjectsState((prevState) => {
      const newTasks = prevState.tasks.filter((task) => task.id != taskId);
      return {
        ...prevState,
        tasks: newTasks,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSaveNewProject(newProject) {
    setProjectsState((prevState) => {
      let len = prevState.projects.length;
      let projects = prevState.projects;
      return {
        ...prevState,
        selectedProjectId: len,
        projects: [...projects, newProject],
      };
    });
  }

  function handleCancelNewProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteCurrProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.splice(prevState.selectedProjectId, 1),
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onNewProjectCancel={handleCancelNewProject}
        onNewProjectSave={handleSaveNewProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    const currProjectId = projectsState.selectedProjectId;
    const project = projectsState.projects[currProjectId];
    const currentTask = projectsState.tasks.filter(
      (tasks) => tasks.projectId === currProjectId,
    );
    content = (
      <ProjectContainer
        onDeleteTasks={handleDeleteTasks}
        onAddTasks={handleAddTask}
        project={project}
        onDelete={handleDeleteCurrProject}
        tasks={currentTask}
      />
    );
  }

  return (
    <main className=" my-8 min-h-screen flex gap-8">
      <ProjectSideBar
        onSelectProject={handleSelectProject}
        projectsState={projectsState}
        onStartAddProject={handleStartAddProject}
      ></ProjectSideBar>
      {content}
      {/*{projectsState.selectedProjectId !=null && projectsState.selectedProjectId !=undefined ?? }*/}
    </main>
  );
}

export default App;
