import noProj from "../assets/no-projects.png";
import Button from "./Button.tsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3 ">
      <img
        alt="No project , empty tasks list"
        src={noProj}
        className="w-16 h-16 mx-auto "
      />
      <h2 className="text-xl font-bold text-black my-4 ">
        {" "}
        No Project Selected
      </h2>
      <p className="text-black mb-4">
        Select a project or get started with a new one!!
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject} extraClasses="border border-black ">
          Create a new project!
        </Button>
      </p>
    </div>
  );
}
