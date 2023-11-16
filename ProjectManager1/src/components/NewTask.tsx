import { useRef, useState } from "react";
import Modal from "./Modal.tsx";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modalRef = useRef();

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modalRef.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h1 className="text-xl font-bold text-black my-4 ">Invalid Input</h1>
        <p className="text-black mb-4">
          The input provided by the user is invalid!!
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm  bg-amber-50 border "
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          onClick={handleClick}
          className="p-2 rounded text-black bg-transparent hover:bg-orange-50"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
