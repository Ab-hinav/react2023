import Button from "./Button.tsx";

export default function ProjectSideBar({
  onStartAddProject,
  projectsState,
  onSelectProject,
}) {
  let projList = null;
  if (projectsState.projects.length != 0) {
    projList = projectsState.projects;
  }

  return (
    <aside className="bg-black w-1/3 md:w-1/4 rounded-tr-2xl flex flex-col items-start p-2 md:p-4 ">
      <h2 className=" text-lg md:text-3xl font-bold text-orange-50 uppercase py-3  md:py-6 ">
        Your Projects
      </h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className="w-full mt-4 md:mt-8">
        {projList != null &&
          projList.map((proj, idx) => {
            let cssBtnClass =
              "w-full border mt-2 duration-200 transition  text-left  px-2 md:px-4 py-2 rounded ";

            if (idx == projectsState.selectedProjectId) {
              cssBtnClass += " bg-orange-50 text-black ";
            } else {
              cssBtnClass +=
                "hover:bg-orange-50 hover:text-black text-orange-50";
            }

            return (
              <li key={idx} className="w-full">
                <button
                  onClick={() => onSelectProject(idx)}
                  className={cssBtnClass}
                >
                  {proj.title}
                </button>
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
