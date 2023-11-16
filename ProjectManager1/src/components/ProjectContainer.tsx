import Button from "./Button.tsx";
import Tasks from "./Tasks.tsx";

export default function ProjectContainer({
  project,
  onDelete,
  onDeleteTasks,
  onAddTasks,
  tasks,
}) {
  const formattedDate = new Date(project.duedate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-rose-50">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-black">{project.title}</h1>
          <Button onClick={onDelete}>Delete</Button>
        </div>
        <p className=" mt-2 mb-2 text-black ">{formattedDate}</p>
        <p className="text-black whitespace-pre-wrap ">{project.description}</p>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTasks} onDelete={onDeleteTasks} />
    </div>
  );
}
