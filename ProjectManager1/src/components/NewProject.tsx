import Input from "./Input.tsx";
import { useRef } from "react";
import Modal from "./Modal.tsx";

export default function NewProject({ onNewProjectSave, onNewProjectCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() == "" ||
      enteredDueDate.trim() == ""
    ) {
      modalRef.current.open();
      return;
    }

    // validation
    onNewProjectSave({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h1 className="text-xl font-bold text-black my-4 ">Invalid Input</h1>
        <p className="text-black mb-4">
          The input provided by the user is invalid!!
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onNewProjectCancel}
              className="p-3 bg-black mr-2 text-orange-50 rounded hover:bg-transparent hover:text-black border "
            >
              Cancel
            </button>
            <button
              className="p-3 bg-black text-orange-50 rounded hover:bg-transparent hover:text-black border "
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div className=" flex flex-col gap-3">
          <Input
            ref={title}
            label="Title"
            isTextarea={false}
            className="w-full p-4 bg-amber-50 border "
          ></Input>
          <Input
            ref={description}
            label="Description"
            isTextarea
            className="p-4 bg-amber-50 border"
            row="2"
          ></Input>
          <Input
            ref={dueDate}
            label="Due Date"
            isTextarea={false}
            className="p-4 bg-amber-50 border "
            type="date"
          ></Input>
        </div>
      </div>
    </>
  );
}
