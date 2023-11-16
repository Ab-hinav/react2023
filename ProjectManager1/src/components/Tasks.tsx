import NewTask from "./NewTask.tsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
  function handleDelete(id) {
    onDelete(id);
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-black mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-black my-4">This project has no tasks</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-orange-50">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-2 flex items-center justify-between my-4 border border-black "
            >
              <span>{task.text}</span>
              <button
                onClick={() => handleDelete(task.id)}
                className="text-black hover:text-red-400 p-2"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
