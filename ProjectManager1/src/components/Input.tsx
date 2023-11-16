import { forwardRef } from "react";

const Input = forwardRef(function Input({ isTextarea, label, ...props }, ref) {
  return (
    <p className="flex flex-col space-y-2">
      <label className="text-lg font-bold ">{label}</label>
      {isTextarea ? (
        <textarea ref={ref} {...props}></textarea>
      ) : (
        <input ref={ref} {...props} />
      )}
    </p>
  );
});

export default Input;
